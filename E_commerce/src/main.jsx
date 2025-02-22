import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Routing from "./poc/Routing.jsx"
import Context from './poc/Context.jsx'
import ThemeManager from './poc/theme/ThemeManager.jsx'
import { Provider } from 'react-redux'
import store from './Components/Redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    {/* <ThemeManager></ThemeManager> */}
    </BrowserRouter> 
     {/* <Context></Context> */}
     </Provider>
  </StrictMode>,
)
