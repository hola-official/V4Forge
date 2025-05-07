import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WagmiConfigProvider } from './providers/Wagmi.jsx'
import "@rainbow-me/rainbowkit/styles.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiConfigProvider>
      <App />
    </WagmiConfigProvider>
  </StrictMode>,
)
