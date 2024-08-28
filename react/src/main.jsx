import { StrictMode } from 'react'; // Importing StrictMode to help identify potential problems in the app
import { createRoot } from 'react-dom/client'; // Importing createRoot for rendering the React application
import App from './App.jsx'; // Importing the main App component from the App.jsx file
import "./site.css"; // Importing the global CSS file for styling

// Create a root container and render the React application into it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Render the App component within StrictMode */}
    <App />
  </StrictMode>,
);

