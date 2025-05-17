
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ShellSelectorProps {
  selectedShell: string;
  onSelectShell: (shell: string) => void;
}

const ShellSelector = ({ selectedShell, onSelectShell }: ShellSelectorProps) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => onSelectShell("bash")}
              variant={selectedShell === "bash" ? "default" : "outline"}
              className={`bg-opacity-80 transition-all duration-300 ${
                selectedShell === "bash"
                  ? "button-glow"
                  : "border-muted/30 bg-transparent"
              }`}
              size="sm"
            >
              Bash
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Generate Bash (.sh) script</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => onSelectShell("powershell")}
              variant={selectedShell === "powershell" ? "default" : "outline"}
              className={`bg-opacity-80 transition-all duration-300 ${
                selectedShell === "powershell"
                  ? "button-glow"
                  : "border-muted/30 bg-transparent"
              }`}
              size="sm"
            >
              PowerShell
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Generate PowerShell (.ps1) script</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ShellSelector;
