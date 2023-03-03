import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CardInfoContext from './context/card-info-context'
import './global-styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardInfoContext>
      <App />
    </CardInfoContext>
  </React.StrictMode>,
)
