import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SearchMovies } from './modules/SearchMovies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchMovies />
  </React.StrictMode>,
)
