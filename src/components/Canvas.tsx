```tsx
import React, { useEffect, useState } from 'react';
import Node from './Node';
import '../styles/canvas.css';

interface NodeData {
    id: string;
    content: string;
}

const Canvas = () => {
    const [nodes, setNodes] = useState<NodeData[]>([]);

    useEffect(() => {
        fetch('/src/data/nodes.json')
            .then(response => response.json())
            .then(data => setNodes(data));
    }, []);

    return (
        <div id="canvas" className="canvas">
            {nodes.map(node => (
                <Node key={node.id} content={node.content} />
            ))}
        </div>
    );
};

export default Canvas;
```