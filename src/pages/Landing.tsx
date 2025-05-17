
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Terminal, FileCode, Rotate3d } from "lucide-react";
import Header from "@/components/Header";

const Landing = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background flex flex-col animate-fade-in">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl md:text-6xl font-medium text-gradient leading-tight">
                Create File Structures<br />With a Single Script
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Generate shell scripts to instantly create complex file structures from a simple text outline
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => navigate('/app')}
                  size="lg"
                  className="button-glow px-8 py-6 h-auto text-lg"
                >
                  Start Building
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary/20 rounded-lg border border-muted/20 backdrop-blur-sm">
                <div className="bg-primary/20 p-3 rounded-md w-fit mb-4">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Multiple Shells</h3>
                <p className="text-muted-foreground">
                  Generate scripts for both Bash and PowerShell environments with a single click
                </p>
              </div>
              
              <div className="p-6 bg-secondary/20 rounded-lg border border-muted/20 backdrop-blur-sm">
                <div className="bg-primary/20 p-3 rounded-md w-fit mb-4">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Syntax Highlighting</h3>
                <p className="text-muted-foreground">
                  View your generated scripts with professional syntax highlighting for better readability
                </p>
              </div>
              
              <div className="p-6 bg-secondary/20 rounded-lg border border-muted/20 backdrop-blur-sm">
                <div className="bg-primary/20 p-3 rounded-md w-fit mb-4">
                  <Rotate3d className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Modern Design</h3>
                <p className="text-muted-foreground">
                  Enjoy a clean, elegant interface designed for focus and productivity
                </p>
              </div>
            </div>
            
            <div className="relative py-12 glass-morphism rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="relative p-8 flex flex-col items-center text-center">
                <BookOpen className="h-10 w-10 text-primary mb-6" />
                <h2 className="text-3xl font-medium mb-3">Ready to get started?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                  Start generating scripts for your file structures in seconds.
                  No account required, completely free.
                </p>
                <Button 
                  onClick={() => navigate('/app')}
                  variant="default"
                  size="lg"
                  className="button-glow"
                >
                  Go to App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-4 px-6 text-center text-xs text-muted-foreground border-t border-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex gap-4">
              <p>Shell Script Generator &copy; 2025</p>
            </div>
            <div className="flex gap-6">
              <button onClick={() => navigate('/about')} className="hover:text-foreground transition-colors">
                About
              </button>
              <a 
                href="https://github.com/rasi23" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/rasindu-vimansha/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
