import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
  placeholder?: string;
  className?: string;
}

export function CodeEditor({
  value,
  onChange,
  language,
  placeholder = 'Enter your code here...',
  className,
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Handle tab key to insert spaces instead of changing focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      
      const newValue = 
        value.substring(0, start) + '  ' + value.substring(end);
      
      onChange(newValue);
      
      // Set cursor position after the inserted tab
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 2;
          textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };
  
  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className={cn('relative', className)}>
      <div className="absolute top-3 right-3 bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
        {language}
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full min-h-[300px] p-4 font-mono text-sm bg-card rounded-md border border-border resize-y focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        spellCheck={false}
      />
    </div>
  );
}