import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyComponent } from '../components/MyComponent';

const App = () => {
  return (
    <div style={{ margin: 32 }}>
      <h1>Playground: MyComponent</h1>
      <MyComponent label="Test label from playground!" />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
