import { Code, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { FeedbackItem as FeedbackItemType, FeedbackSeverity } from '@/types';
import { cn } from '@/lib/utils';

interface FeedbackItemProps {
  item: FeedbackItemType;
}

export function FeedbackItem({ item }: FeedbackItemProps) {
  const { message, line, column, severity, suggestion, code } = item;

  const getSeverityIcon = (severity: FeedbackSeverity) => {
    switch (severity) {
      case 'error':
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getSeverityClass = (severity: FeedbackSeverity) => {
    switch (severity) {
      case 'error':
        return 'border-l-destructive';
      case 'warning':
        return 'border-l-yellow-500';
      case 'info':
      default:
        return 'border-l-blue-500';
    }
  };

  return (
    <div className={cn(
      "border-l-4 pl-4 py-3 mb-4 bg-card rounded-r-md",
      getSeverityClass(severity)
    )}>
      <div className="flex items-start gap-3">
        {getSeverityIcon(severity)}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h4 className="font-medium text-card-foreground">{message}</h4>
            {(line || column) && (
              <div className="text-xs text-muted-foreground">
                {line && `Line: ${line}`}{line && column && ', '}
                {column && `Column: ${column}`}
              </div>
            )}
          </div>
          
          {code && (
            <div className="bg-muted p-2 rounded-md mb-2 flex items-center gap-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <pre className="font-mono text-xs overflow-x-auto">{code}</pre>
            </div>
          )}
          
          {suggestion && (
            <div className="text-sm mt-1">
              <strong className="font-medium">Suggestion:</strong> {suggestion}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}