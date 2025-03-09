import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faMobileScreen, faRobot, faCartPlus, faTerminal, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faMobileScreen, faRobot, faCartPlus, faTerminal, faCode);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
