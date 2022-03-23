import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
  const content = renderToString(<Home source={'server'} />);

  return `
    <html>
    <head></head>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
    </html>
    `;
};
