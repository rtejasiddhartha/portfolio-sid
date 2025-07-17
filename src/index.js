import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your main App component
import './style.css'; // Import your global styles

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(<App />); // Render the App component to the root.
