import { CodeAnalysisResult } from "@/types";
import { FeedbackCategory } from "./FeedbackCategory";
import { AlertCircle } from "lucide-react";

interface ResultsPanelProps {
  results: CodeAnalysisResult | null;
}

export function ResultsPanel({ results }: ResultsPanelProps) {
  if (!results || !Array.isArray(results.categories)) {
    return null;
  }

  const { categories, summary } = results;

  // Count total issues and calculate severities
  const totalIssues = categories.reduce(
    (acc, category) => acc + (category?.items?.length || 0),
    0
  );

  const errorCount = categories.reduce(
    (acc, category) =>
      acc +
      (category?.items?.filter((item) => item.severity === "error")?.length ||
        0),
    0
  );

  const warningCount = categories.reduce(
    (acc, category) =>
      acc +
      (category?.items?.filter((item) => item.severity === "warning")?.length ||
        0),
    0
  );

  return (
    <div className="space-y-6">
      <div className="bg-card border rounded-md p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h3 className="text-lg font-semibold">Analysis Results</h3>
          <div className="text-sm text-muted-foreground">
            {totalIssues} issue{totalIssues !== 1 ? "s" : ""} found
            {errorCount > 0 &&
              ` (${errorCount} error${errorCount !== 1 ? "s" : ""})`}
            {warningCount > 0 &&
              ` (${warningCount} warning${warningCount !== 1 ? "s" : ""})`}
          </div>
        </div>

        {summary && (
          <div className="flex items-start gap-2 p-3 bg-muted rounded-md mb-4">
            <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
            <p className="text-sm">{summary}</p>
          </div>
        )}

        <div className="space-y-4">
          {categories.map((category, index) => (
            <FeedbackCategory
              key={category.id}
              category={category}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
