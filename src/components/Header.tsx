import { Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight">AI Code Reviewer</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}