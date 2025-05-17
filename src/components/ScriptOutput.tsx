
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard, Download, Code as CodeIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ScriptOutputProps {
  generatedScript: string;
  shellType: string;
  isLoading: boolean;
}

const ScriptOutput = ({ generatedScript, shellType, isLoading }: ScriptOutputProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedScript);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Script copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const fileExtension = shellType === "bash" ? "sh" : "ps1";
    const fileName = `generate-files.${fileExtension}`;
    const blob = new Blob([generatedScript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `Script saved as ${fileName}`,
    });
  };

  const language = shellType === "bash" ? "bash" : "powershell";

  return (
    <div className="h-full flex flex-col">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CodeIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            {shellType === "bash" ? "Bash Script (.sh)" : "PowerShell Script (.ps1)"}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {generatedScript && (
            <>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleCopy}
                      variant="outline"
                      size="sm"
                      className="border-muted/30 bg-transparent hover:border-primary/50"
                    >
                      <Clipboard className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      size="sm"
                      className="border-muted/30 bg-transparent hover:border-primary/50"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Download script</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          )}
        </div>
      </div>

      <div className="flex-grow overflow-hidden rounded-md glass-morphism">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-6 w-24 bg-muted/30 rounded mb-2"></div>
              <div className="h-4 w-48 bg-muted/20 rounded"></div>
            </div>
          </div>
        ) : generatedScript ? (
          <div className="h-full overflow-auto">
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "1rem",
                height: "100%",
                backgroundColor: "transparent",
                overflow: "auto",
              }}
            >
              {generatedScript}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p className="mb-2 text-sm">No script generated yet</p>
              <p className="text-xs">Enter a file tree structure and click Generate</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScriptOutput;
