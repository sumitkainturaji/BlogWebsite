import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import { BlogProvider } from './context/BlogContext'
import Navbar from './Navbar/Navbar'
import './index.css'
import HowToUse from './pages/Howtouse'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <BlogProvider>
      <Router>
        <Navbar onSearch={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/how-to-use" element={<HowToUse />} />

          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </Router>
    </BlogProvider>
  )
}

export default App
