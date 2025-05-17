export type Language = {
  id: string;
  name: string;
};

export type FeedbackSeverity = 'info' | 'warning' | 'error';

export type FeedbackItem = {
  id: string;
  message: string;
  line?: number;
  column?: number;
  severity: FeedbackSeverity;
  suggestion?: string;
  code?: string;
};

export type FeedbackCategory = {
  id: string;
  title: string;
  items: FeedbackItem[];
};

export type CodeAnalysisResult = {
  categories: FeedbackCategory[];
  summary?: string;
};