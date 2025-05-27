import "../index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { TextComposer } from '../components/TextComposer';

const App = () => {
  return (
    <div style={{ margin: 32 }}>
      <h1 className="mb-12 text-xl">Playground: TextComposer</h1>
      <TextComposer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
