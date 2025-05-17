
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-muted/20">
      <div className="flex items-center space-x-3">
        <div className="bg-primary/20 p-2 rounded-lg">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <Link to="/" className="text-xl font-medium text-gradient">
          Shell Script Generator
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link 
          to="/app"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          App
        </Link>
        <Link 
          to="/about" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
        <a 
          href="https://github.com/rasi23" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/rasindu-vimansha/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-muted/30 hover:border-primary/50 bg-transparent"
          onClick={() => window.location.href = "/docs"}
        >
          Documentation
        </Button>
      </div>
    </header>
  );
};

export default Header;
