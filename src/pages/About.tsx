
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col animate-fade-in">
      <main className="flex-grow p-6 md:p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>

          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-medium text-gradient">About</h1>
              <p className="text-xl text-muted-foreground">
                Shell Script Generator is a powerful tool to streamline your development workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-secondary/30 border-muted/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-medium mb-3 text-gradient">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To simplify development workflows by automating repetitive tasks. 
                    We believe in creating elegant tools that save time and reduce errors.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/30 border-muted/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-medium mb-3 text-gradient">Technology</h2>
                  <p className="text-muted-foreground">
                    Built with modern technologies including Tauri, React, TypeScript, and FastAPI,
                    our application delivers a seamless desktop experience with powerful features.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-medium text-gradient">The Creator</h2>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-24 w-24 border border-primary/20 subtle-glow">
                  <AvatarImage src="https://github.com/rasinduravimansha.png" />
                  <AvatarFallback>RI</AvatarFallback>
                </Avatar>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-medium">Rasindu Vimansha Illanagarathne</h3>
                    <p className="text-muted-foreground">Developer & Designer</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p>
                      Rasindu is a passionate CyberSecurity and Security software designer with expertise in 
                      building modern web and desktop applications. With a focus on developer experience 
                      and workflow optimization, he created the Shell Script Generator to simplify 
                      common development tasks.
                    </p>
                    <p>
                      His work combines technical excellence with intuitive design, creating 
                      tools that are both powerful and a pleasure to use.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-muted/30 hover:border-primary/50 bg-transparent"
                      onClick={() => window.open("https://github.com/rasi23", "_blank")}
                    >
                      GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-muted/30 hover:border-primary/50 bg-transparent"
                      onClick={() => window.open("https://www.linkedin.com/in/rasindu-vimansha/", "_blank")}
                    >
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 px-6 text-center text-xs text-muted-foreground">
        <p>Shell Script Generator &copy; 2025- Maintained with ❤️ by <a href="https://www.linkedin.com/in/rasindu-vimansha/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rasindu Vimansha Illangaratne</a>.</p>
      </footer>
    </div>
  );
};

export default About;
