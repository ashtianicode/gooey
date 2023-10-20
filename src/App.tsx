```tsx
import React from 'react';
import './styles/index.css';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="container">
      <Canvas />
      <Sidebar />
    </div>
  );
}

export default App;
```