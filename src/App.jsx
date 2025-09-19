import { Routes, Route } from "react-router-dom"
import { Sidebar } from './components/sidebar'
import { BurgerIcon } from './components/burgerIcons'
import { useRef, useState } from "react"
import HomePage from "./pages/homepage"
import AboutPage from "./pages/about"
import ProjectsPage from "./pages/projects"
import ContactPage from "./pages/contact"



function App() {
  const sidebar = useRef(null)
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <header>

      </header>
      
      <div className="relative h-dvh overflow-x-hidden">
        <Sidebar ref={sidebar} />
        <BurgerIcon
          sidebar={sidebar}
          isToggle={isToggle}
          setIsToggle={setIsToggle} />
        <main>
          <Routes>
            <Route index element={<HomePage />} dispaly="Angel Buenavista" />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>
      </div>

      <footer></footer>
    </>
  )
}

export default App
