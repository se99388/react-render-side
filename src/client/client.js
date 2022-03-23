//startup point for the client side application
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';

//hydrate is similar to render but it uses for only attach event handlers to the html's "skeleton" that rendered from server. It preserves the HTML so it is faster than render.
ReactDom.hydrate(<Home source={'client'}/>, document.getElementById('root'));

