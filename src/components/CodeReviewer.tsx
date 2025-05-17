import { useState } from "react";
import { DEFAULT_CODE_JAVASCRIPT, DEFAULT_CODE_PYTHON } from "@/lib/constants";
import { CodeEditor } from "./CodeEditor";
import { LanguageSelector } from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
// import { submitCodeForReview } from '@/services/api';
import { getReview } from "@/services/api";
import { CodeAnalysisResult } from "@/types";
import { ResultsPanel } from "./ResultsPanel";
import { useToast } from "@/hooks/use-toast";

export function CodeReviewer() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(DEFAULT_CODE_JAVASCRIPT);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<CodeAnalysisResult | null>(null);
  const { toast } = useToast();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);

    // Reset code to example when changing language
    if (newLanguage === "javascript") {
      setCode(DEFAULT_CODE_JAVASCRIPT);
    } else if (newLanguage === "python") {
      setCode(DEFAULT_CODE_PYTHON);
    }

    // Reset results when changing language
    setResults(null);
  };

  const handleAnalyzeCode = async () => {
    if (!code.trim()) {
      toast({
        title: "Error",
        description: "Please enter some code to analyze",
        variant: "destructive",
      });
      return;
    }

    setAnalyzing(true);

    try {
      let res = await getReview(code, language);
      setResults(res);
      // console.log(res);
    } catch (error) {
      console.error("Error analyzing code:", error);
      toast({
        title: "Error",
        description: "Failed to analyze code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="w-full sm:w-64">
            <h2 className="text-base font-medium mb-2">Select Language</h2>
            <LanguageSelector
              value={language}
              onValueChange={handleLanguageChange}
            />
          </div>
          <div className="flex items-end">
            <Button
              onClick={handleAnalyzeCode}
              disabled={analyzing || !code.trim()}
              className="w-full sm:w-auto"
            >
              {analyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Code"
              )}
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium mb-2">Your Code</h2>
          <CodeEditor value={code} onChange={setCode} language={language} />
        </div>
      </div>

      {(results || analyzing) && (
        <div className="pt-4">
          {analyzing ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Loader2 className="h-8 w-8 animate-spin mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Analyzing your code</h3>
              <p className="text-muted-foreground">
                Our AI is reviewing your code for syntax, performance, security
                issues, and best practices.
              </p>
            </div>
          ) : (
            <ResultsPanel results={results} />
          )}
        </div>
      )}
    </div>
  );
}
