import { Route, Routes } from 'react-router-dom'
import './styles/main.scss'
import Home from './pages/Home/home'
import About from './pages/about'
import Services from './pages/services'
import News from './pages/news'
import Partners from './pages/partners'
import Career from './pages/career'
import Contact from './pages/contact'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news-update" element={<News />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
