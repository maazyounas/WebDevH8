import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import  Prop from './components/propsDrilling/prop.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Prop  name="ali" para="this is a paragraph"/>
  </StrictMode>
)