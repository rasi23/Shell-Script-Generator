import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col animate-fade-in">
      <main className="flex-grow p-6 md:p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-medium text-gradient">Documentation</h1>
              <p className="text-xl text-muted-foreground">
                Learn how to use the Shell Script Generator to create file structures quickly.
              </p>
            </div>

            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="syntax">Syntax Guide</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
              </TabsList>
              
              <TabsContent value="getting-started" className="space-y-6">
                <Card className="bg-secondary/30 border-muted/20">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-medium text-gradient">Getting Started</h2>
                    <p>
                      Shell Script Generator allows you to quickly create shell scripts that generate file and directory structures.
                      Follow these simple steps to get started:
                    </p>
                    
                    <ol className="space-y-4 list-decimal list-inside">
                      <li className="pl-2">
                        <span className="font-medium">Choose your shell type</span>
                        <p className="text-muted-foreground mt-1">
                          Select between Bash (for Unix/Linux/macOS) or PowerShell (for Windows) depending on your target environment.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Enter your file tree structure</span>
                        <p className="text-muted-foreground mt-1">
                          Type or paste your directory structure in the input area. You can use the example button to see the expected format.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Generate your script</span>
                        <p className="text-muted-foreground mt-1">
                          Click the "Generate Script" button to create your shell script based on the provided structure.
                        </p>
                      </li>
                      <li className="pl-2">
                        <span className="font-medium">Use your script</span>
                        <p className="text-muted-foreground mt-1">
                          Copy the generated script or download it as a file. Run it in your terminal to create the file structure.
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="syntax" className="space-y-6">
                <Card className="bg-secondary/30 border-muted/20">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-medium text-gradient">Syntax Guide</h2>
                    <p>
                      The file tree structure follows a simple format that's easy to read and write:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Directories</h3>
                        <p className="text-muted-foreground">
                          Directories should end with a forward slash (/) to distinguish them from files.
                        </p>
                        <pre className="bg-black/50 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>project/</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">Files</h3>
                        <p className="text-muted-foreground">
                          Files are represented without any trailing slash.
                        </p>
                        <pre className="bg-black/50 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>README.md</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">Indentation</h3>
                        <p className="text-muted-foreground">
                          Use indentation to represent nesting. You can use spaces or special characters like │, ├, └, and ─.
                        </p>
                        <pre className="bg-black/50 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>project/
├── src/
│   ├── main.py
│   └── utils/
│       └── helpers.py
└── README.md</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="examples" className="space-y-6">
                <Card className="bg-secondary/30 border-muted/20">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-medium text-gradient">Examples</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">Basic Web Project</h3>
                        <pre className="bg-black/50 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>web-project/
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── assets/
│   ├── images/
│   └── fonts/
└── README.md</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">Node.js Application</h3>
                        <pre className="bg-black/50 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>node-app/
├── src/
│   ├── index.js
│   ├── routes/
│   │   └── api.js
│   ├── controllers/
│   │   └── userController.js
│   └── models/
│       └── User.js
├── config/
│   └── database.js
├── tests/
├── .env
├── package.json
└── README.md</code>
                        </pre>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium">Python Project</h3>
                        <pre className="bg-black/50 p-3 rounded-md mt-2 overflow-x-auto">
                          <code>python-project/
├── src/
│   ├── __init__.py
│   ├── main.py
│   └── utils/
│       ├── __init__.py
│       └── helpers.py
├── tests/
│   ├── __init__.py
│   └── test_main.py
├── data/
│   └── sample.json
├── requirements.txt
└── README.md</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="py-4 px-6 text-center text-xs text-muted-foreground">
        <p>Shell Script Generator &copy; 2025- Maintained with ❤️ by <a href="https://www.linkedin.com/in/rasindu-vimansha/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rasindu Vimansha Illangaratne</a>.</p>
      </footer>
    </div>
  );
};

export default Documentation;