```tsx
import React, { useEffect, useState } from 'react';
import { fetchContexts } from '../api/context';
import { fetchMemories } from '../api/memory';
import { fetchRoles } from '../api/roles';

type TabProps = {
  name: string;
};

const Tab: React.FunctionComponent<TabProps> = ({ name }) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    let fetchData;
    switch (name) {
      case 'context':
        fetchData = fetchContexts;
        break;
      case 'memory':
        fetchData = fetchMemories;
        break;
      case 'roles':
        fetchData = fetchRoles;
        break;
      default:
        fetchData = () => Promise.resolve([]);
    }

    fetchData().then(setData);
  }, [name]);

  return (
    <div id={`${name}-tab`} className="tab">
      <h2>{name}</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
```