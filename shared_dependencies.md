Shared Dependencies:

1. **React**: All the .tsx files will be using React for component creation and rendering.

2. **Typescript**: All the .tsx and .ts files will be written in Typescript.

3. **Tailwind CSS**: All the .css files will be using Tailwind CSS for styling.

4. **DOM Element IDs**: 
   - "canvas": Used in Canvas.tsx for the main canvas area.
   - "sidebar": Used in Sidebar.tsx for the sidebar area.
   - "node": Used in Node.tsx for each node in the canvas.
   - "context-tab", "memory-tab", "roles-tab": Used in Tab.tsx for each tab in the sidebar.

5. **API Endpoints**: 
   - "/api/context": Used in context.ts to fetch all contexts.
   - "/api/memory": Used in memory.ts to fetch all memories.
   - "/api/roles": Used in roles.ts to fetch all roles.

6. **Data Schemas**: 
   - nodes.json: Used in Node.tsx to fetch markdown content of nodes.

7. **Function Names**: 
   - "fetchContexts": Used in context.ts to fetch all contexts.
   - "fetchMemories": Used in memory.ts to fetch all memories.
   - "fetchRoles": Used in roles.ts to fetch all roles.

8. **Exported Variables**: 
   - "Canvas": Exported from Canvas.tsx.
   - "Sidebar": Exported from Sidebar.tsx.
   - "Node": Exported from Node.tsx.
   - "Tab": Exported from Tab.tsx.

9. **Package.json**: All the dependencies and scripts for the project will be listed here.

10. **tsconfig.json**: The configuration for the Typescript compiler will be listed here.

11. **run.sh**: This script will be used to run the app. It will be shared with the user to start the application.