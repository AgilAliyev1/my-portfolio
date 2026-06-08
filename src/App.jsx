import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home         from './pages/Home'
import About        from './pages/About'
import Projects     from './pages/Projects'
import Certificates from './pages/Certificates'
import Blog         from './pages/Blog'
import BlogPost     from './pages/BlogPost'
import Contact      from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<Home />}         />
        <Route path="/about"        element={<About />}        />
        <Route path="/projects"     element={<Projects />}     />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blog"         element={<Blog />}         />
        <Route path="/blog/:id"     element={<BlogPost />}     />
        <Route path="/contact"      element={<Contact />}      />
      </Routes>
    </BrowserRouter>
  )
}

export default App
