```tsx
import React, { useState, useEffect } from 'react';
import './node.css';

interface NodeProps {
    id: string;
    content: string;
}

const Node: React.FunctionComponent<NodeProps> = ({ id, content }) => {
    const [nodeContent, setNodeContent] = useState(content);

    useEffect(() => {
        setNodeContent(content);
    }, [content]);

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNodeContent(event.target.value);
    };

    return (
        <div id={id} className="node">
            <textarea value={nodeContent} onChange={handleContentChange} />
        </div>
    );
};

export default Node;
```