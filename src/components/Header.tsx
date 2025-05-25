import { Code2, LogIn, UserPlus } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const isLoggedIn = false;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-neutral-800 via-slate-700 to-gray-800 bg-opacity-95 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <nav className="flex w-full max-w-6xl items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <Code2 className="h-6 w-6 text-white transition-transform duration-300 hover:scale-110" />
            <h1 className="text-lg font-extrabold text-white sm:text-xl tracking-tight transition-colors duration-300 hover:text-lime-300">
              AI Code Reviewer
            </h1>
          </div>

          {/* Theme toggle + Auth buttons */}
          <div className="flex items-center gap-4 ">
           

            {isLoggedIn ? (
              <div className="flex items-center gap-2 cursor-pointer group">
                <img
                  src="/path-to-avatar.jpg"
                  alt="User Avatar"
                  className="h-8 w-8 rounded-full border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-110"
                />
                <span className="hidden sm:inline text-white font-semibold group-hover:text-lime-300 transition-colors duration-300">
                  Username
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-md bg-cyan-900 px-3 py-2 text-xs font-semibold text-white shadow-md hover:bg-neutral-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-lime-300"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-md bg-cyan-900 px-3 py-2 text-xs font-semibold text-white shadow-md hover:bg-neutral-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-lime-300"
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </button>
                 <ThemeToggle />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
