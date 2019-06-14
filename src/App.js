import React, { useState } from 'react';
import ReasourceList from './ResourceList'
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts')
  
  return (
    <div className="App">
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}></ResourceList>
    </div>
  );
}

export default App;
