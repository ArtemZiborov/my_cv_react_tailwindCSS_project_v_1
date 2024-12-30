import { useState } from 'react'
import SideNav from './components/SideNav'
import FunctionalComp from './components/FunctionalComp'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
 

  return (
    <div>
      <SideNav />
      <FunctionalComp />
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
