
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-resume-primary dark:text-white">
            ResumeAI
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-resume-primary transition-colors dark:text-gray-300 dark:hover:text-white">
            Home
          </Link>
          <Link to="/analyzer" className="text-gray-600 hover:text-resume-primary transition-colors dark:text-gray-300 dark:hover:text-white">
            Analyzer
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-resume-primary transition-colors dark:text-gray-300 dark:hover:text-white">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="default" 
            className="bg-resume-primary hover:bg-resume-primary/90 dark:bg-resume-secondary dark:hover:bg-resume-secondary/90"
            asChild
          >
            <Link to="/analyzer">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
