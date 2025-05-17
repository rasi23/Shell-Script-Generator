
// This simulates the FastAPI backend for the Tauri app
// In the actual implementation, this would make calls to the Python FastAPI backend

export const generateBashScript = (fileTree: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lines = fileTree.split('\n');
      let script = '#!/bin/bash\n\n# Generated Shell Script\n\n';
      
      // Track the current directory level
      const dirStack: string[] = [];
      
      lines.forEach(line => {
        // Skip empty lines
        if (!line.trim()) return;
        
        // Parse the line to extract the file/folder name and indent level
        let indent = 0;
        while (line.charAt(indent) === ' ' || line.charAt(indent) === '│' || 
               line.charAt(indent) === '├' || line.charAt(indent) === '└' || 
               line.charAt(indent) === '─' || line.charAt(indent) === '│') {
          indent++;
        }
        
        // Extract the item name
        const item = line.substring(indent).trim();
        
        // Skip if not a valid item
        if (!item) return;
        
        // Check if it's a directory or file
        const isDirectory = item.endsWith('/');
        const itemName = isDirectory ? item.slice(0, -1) : item;
        
        // Calculate the current level
        const level = Math.floor(indent / 3);
        
        // Adjust directory stack based on current level
        while (dirStack.length > level) {
          dirStack.pop();
        }
        
        // Construct the path
        let path = "";
        if (dirStack.length > 0) {
          path = `${dirStack.join('/')}/`;
        }
        
        // Update path with current item
        const fullPath = `${path}${itemName}`;
        
        // If it's a directory, add it to the stack and create directory command
        if (isDirectory) {
          dirStack.push(itemName);
          script += `mkdir -p "${fullPath}"\n`;
        } else {
          // It's a file, create file command
          script += `touch "${fullPath}"\n`;
        }
      });
      
      resolve(script);
    }, 800); // Simulate API delay
  });
};

export const generatePowerShellScript = (fileTree: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lines = fileTree.split('\n');
      let script = '# Generated PowerShell Script\n\n';
      
      // Track the current directory level
      const dirStack: string[] = [];
      
      lines.forEach(line => {
        // Skip empty lines
        if (!line.trim()) return;
        
        // Parse the line to extract the file/folder name and indent level
        let indent = 0;
        while (line.charAt(indent) === ' ' || line.charAt(indent) === '│' || 
               line.charAt(indent) === '├' || line.charAt(indent) === '└' || 
               line.charAt(indent) === '─' || line.charAt(indent) === '│') {
          indent++;
        }
        
        // Extract the item name
        const item = line.substring(indent).trim();
        
        // Skip if not a valid item
        if (!item) return;
        
        // Check if it's a directory or file
        const isDirectory = item.endsWith('/');
        const itemName = isDirectory ? item.slice(0, -1) : item;
        
        // Calculate the current level
        const level = Math.floor(indent / 3);
        
        // Adjust directory stack based on current level
        while (dirStack.length > level) {
          dirStack.pop();
        }
        
        // Construct the path
        let path = "";
        if (dirStack.length > 0) {
          path = `${dirStack.join('\\')}\\`;
        }
        
        // Update path with current item
        const fullPath = `${path}${itemName}`;
        
        // If it's a directory, add it to the stack and create directory command
        if (isDirectory) {
          dirStack.push(itemName);
          script += `New-Item -Path "${fullPath}" -ItemType Directory -Force\n`;
        } else {
          // It's a file, create file command
          script += `New-Item -Path "${fullPath}" -ItemType File -Force\n`;
        }
      });
      
      resolve(script);
    }, 800); // Simulate API delay
  });
};
