import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ComponentForm } from './components/ComponentForm/ComponentForm'
import { AppProduct } from './components/AppProduct/AppProduct'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect'
import { ComponentCounter } from './components/ComponentCounter/ComponentCounter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <App/>
    </div>
  </StrictMode>,
)