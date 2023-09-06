import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import {JobPageContext} from './context/JobPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <JobPageContext>
        <App />
      </JobPageContext>
    </BrowserRouter>
  </React.StrictMode>,
)
