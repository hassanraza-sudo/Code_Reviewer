import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { CodeReviewer } from '@/components/CodeReviewer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ai-code-reviewer-theme">
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <CodeReviewer />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;