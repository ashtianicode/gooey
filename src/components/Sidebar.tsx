```tsx
import React, { useEffect, useState } from 'react';
import { fetchContexts } from '../api/context';
import { fetchMemories } from '../api/memory';
import { fetchRoles } from '../api/roles';
import Tab from './Tab';

const Sidebar = () => {
    const [contexts, setContexts] = useState([]);
    const [memories, setMemories] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetchContexts().then(setContexts);
        fetchMemories().then(setMemories);
        fetchRoles().then(setRoles);
    }, []);

    return (
        <div id="sidebar" className="sidebar">
            <Tab title="Context" content={contexts} />
            <Tab title="Memory" content={memories} />
            <Tab title="Roles" content={roles} />
        </div>
    );
};

export default Sidebar;
```