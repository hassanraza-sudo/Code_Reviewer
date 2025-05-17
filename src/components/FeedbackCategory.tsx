import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FeedbackCategory as FeedbackCategoryType } from '@/types';
import { FeedbackItem } from './FeedbackItem';
import { Badge } from '@/components/ui/badge';

interface FeedbackCategoryProps {
  category: FeedbackCategoryType;
  defaultOpen?: boolean;
}

export function FeedbackCategory({ 
  category, 
  defaultOpen = false 
}: FeedbackCategoryProps) {
  const { id, title, items } = category;
  
  // Count items by severity
  const errorCount = items.filter(item => item.severity === 'error').length;
  const warningCount = items.filter(item => item.severity === 'warning').length;
  const infoCount = items.filter(item => item.severity === 'info').length;

  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen ? id : undefined}>
      <AccordionItem value={id} className="border rounded-md mb-4">
        <AccordionTrigger className="px-4 hover:no-underline hover:bg-accent/50">
          <div className="flex items-center justify-between w-full">
            <span>{title}</span>
            <div className="flex gap-2">
              {errorCount > 0 && (
                <Badge variant="destructive">{errorCount} Error{errorCount !== 1 ? 's' : ''}</Badge>
              )}
              {warningCount > 0 && (
                <Badge variant="outline" className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500">
                  {warningCount} Warning{warningCount !== 1 ? 's' : ''}
                </Badge>
              )}
              {infoCount > 0 && (
                <Badge variant="outline" className="bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500">
                  {infoCount} Info
                </Badge>
              )}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-2 pb-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground italic">No issues found.</p>
          ) : (
            items.map((item) => (
              <FeedbackItem key={item.id} item={item} />
            ))
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}