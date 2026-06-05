import { HashRouter, Routes, Route } from 'react-router-dom'

import Home         from './pages/Home'
import About        from './pages/About'
import Projects     from './pages/Projects'
import Certificates from './pages/Certificates'
import Blog         from './pages/Blog'
import Contact      from './pages/Contact'
import Resume       from './pages/Resume'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"             element={<Home />}         />
        <Route path="/about"        element={<About />}        />
        <Route path="/projects"     element={<Projects />}     />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blog"         element={<Blog />}         />
        <Route path="/contact"      element={<Contact />}      />
        <Route path="/resume"       element={<Resume />}       />
      </Routes>
    </HashRouter>
  )
}

export default App