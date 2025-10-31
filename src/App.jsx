import { Routes, Route } from "react-router-dom"
import { SidebarMobile } from './components/sidebarVariant/sidebarMobile'
import { SidebarTabletDesktop } from './components/sidebarVariant/sidebarTabletDesktop'
import { SidebarProfileTabletDesktop } from "./components/sidebarVariant/sidebarWithProfileTabletDesktop.jsx"
import { BurgerIcon } from './components/icons/burgerIcons'
import { useRef, useState } from "react"
import { LoadingScreen } from "./components/loadingScreen/loadingScreen"
import { useLoadingScreen } from "./hooks/useLoadingScreen"
import * as Pages from './pages/exportPages/importedPages'


function App() {
  const sidebar = useRef(null)
  const [isToggle, setIsToggle] = useState(false);

  const loading = useLoadingScreen(1100);

  if (loading) {
    return <LoadingScreen />
  }



  return (
    <>
      <SidebarProfileTabletDesktop />
      <SidebarTabletDesktop ref={sidebar} />
      <div className="relative h-dvh overflow-x-hidden">
        <SidebarMobile ref={sidebar} />

        <BurgerIcon
          sidebar={sidebar}
          isToggle={isToggle}
          setIsToggle={setIsToggle} />
        <main>
          <Routes>
            <Route index element={<Pages.HomePage />} dispaly="Angel Buenavista" />
            <Route path='/about' element={<Pages.AboutPage />} />
            <Route path='/projects' element={<Pages.ProjectsPage />} />
            <Route path='/contact' element={<Pages.ContactPage />} />
          </Routes>
        </main>
      </div>

    </>
  )
}

export default App
