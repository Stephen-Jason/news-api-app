import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

const domRootNode = document.getElementById("root");
const root = createRoot(domRootNode);

root.render(<App/>)
