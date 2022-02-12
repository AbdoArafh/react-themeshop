import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Themes from './pages/themes'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Themes />} />
        <Route path="/plugins" element={<h1>Plugins</h1>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
