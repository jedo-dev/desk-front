import React, { useState } from 'react';
import { Tldraw } from '@tldraw/tldraw';

export const TlDrawPage = () => {
  const [app, setApp] = useState<TldrawApp | null>(null);

  const createRedSquare = () => {
    if (app) {
      app.createShapes([
        {
          id: 'red-square',
          type: 'geo',
          x: 100,  // X position on canvas
          y: 100,  // Y position on canvas
          props: {
            w: 100,
            h: 100,
            fill: 'red',  // Color of the square
          },
        },
      ]);
    }
  };

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Tldraw onMount={(appInstance) => setApp(appInstance)} />
      <button
        onClick={createRedSquare}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          padding: '10px 20px',
          backgroundColor: '#ff4d4f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Red Square
      </button>
    </div>
  );
};
