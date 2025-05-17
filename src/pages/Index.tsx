
import { useState } from "react";
import Header from "@/components/Header";
import FileTreeInput from "@/components/FileTreeInput";
import ScriptOutput from "@/components/ScriptOutput";
import ShellSelector from "@/components/ShellSelector";
import { generateBashScript, generatePowerShellScript } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [fileTree, setFileTree] = useState("");
  const [shellType, setShellType] = useState<"bash" | "powershell">("bash");
  const [generatedScript, setGeneratedScript] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!fileTree.trim()) {
      toast({
        title: "Cannot generate script",
        description: "Please enter a file tree structure first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      let script;
      if (shellType === "bash") {
        script = await generateBashScript(fileTree);
      } else {
        script = await generatePowerShellScript(fileTree);
      }
      setGeneratedScript(script);

      toast({
        title: "Script generated!",
        description: `${shellType === "bash" ? "Bash" : "PowerShell"} script has been created`,
      });
    } catch (error) {
      console.error("Error generating script:", error);
      toast({
        title: "Error",
        description: "Failed to generate script",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col animate-fade-in">
      <Header />
      
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-gradient">Shell Script Generator</h2>
            <p className="text-muted-foreground">
              Generate shell scripts to create file and folder structures
              Paste your directory tree and choose your preferred shell.
            </p>
          </div>
          <ShellSelector selectedShell={shellType} onSelectShell={(shell) => setShellType(shell as "bash" | "powershell")} />

          <div className="split-view">
            <div className="h-full">
              <FileTreeInput 
                fileTree={fileTree} 
                onChange={setFileTree} 
                onGenerate={handleGenerate}
              />
            </div>
            <div className="h-full">
              <ScriptOutput 
                generatedScript={generatedScript} 
                shellType={shellType} 
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 px-6 text-center text-xs text-muted-foreground">
        <p>Shell Script Generator &copy; 2025- Maintained with ❤️ by Rasindu Vimansha Illangaratne.</p>
      </footer>
    </div>
  );
};

export default Index;
