
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Terminal } from "lucide-react";

interface FileTreeInputProps {
  fileTree: string;
  onChange: (fileTree: string) => void;
  onGenerate: () => void;
}

const FileTreeInput = ({ fileTree, onChange, onGenerate }: FileTreeInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Example tree structure for when input is empty
  const exampleTree = `project/
├── src/
│   ├── main.py
│   ├── utils/
│   │   └── helpers.py
├── data/
│   ├── config.json
│   └── sample.csv
└── README.md`;

  useEffect(() => {
    if (fileTree === "" && textareaRef.current) {
      textareaRef.current.placeholder = exampleTree;
    }
  }, [fileTree]);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">File Tree Structure</span>
        </div>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  onChange(exampleTree);
                }}
                variant="outline"
                size="sm"
                className="border-muted/30 bg-transparent hover:border-primary/50 text-xs"
              >
                Use Example
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Insert an example tree structure</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className={`relative flex-grow border rounded-md glass-morphism ${
        isFocused ? "ring-1 ring-primary/40" : ""
      }`}>
        <Textarea
          ref={textareaRef}
          value={fileTree}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-full w-full resize-none bg-transparent border-none font-mono text-sm focus-visible:ring-0 focus-visible:ring-offset-0 overflow-auto"
        />
      </div>

      <div className="mt-4 flex justify-center">
        <Button 
          onClick={onGenerate}
          className="px-8 button-glow bg-primary/90 hover:bg-primary text-primary-foreground transition-all duration-300"
          disabled={!fileTree.trim()}
        >
          Generate Script
        </Button>
      </div>
    </div>
  );
};

export default FileTreeInput;
