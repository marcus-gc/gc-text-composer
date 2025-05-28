import "../index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { TextComposer } from '../components/TextComposer';
import { SimpleTextComposer } from '../components/SimpleTextComposer';

const App = () => {
  return (
    <div style={{ margin: 32 }}>
      <div className="mb-12">
        <h1 className="mb-7 text-xl">Playground: TextComposer</h1>
        <TextComposer/>
      </div>


      <h1 className="mb-7 text-xl">Playground: SimpleTextComposer</h1>
      <SimpleTextComposer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
