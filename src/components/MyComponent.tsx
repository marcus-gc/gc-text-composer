import React from 'react';

export interface MyComponentProps {
  label?: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ label = 'Hello from MyComponent!' }) => {
  return (
    <div style={{ padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>{label}</h2>
      <p>This is a reusable component scaffold.</p>
    </div>
  );
};

export default MyComponent;
