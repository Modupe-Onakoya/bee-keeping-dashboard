import { useState } from "react"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import HealthMatrix from "./Components/HealthMatrix"
import DarkTheme from "./Components/darkTheme"


function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light')

  return (
    <div className="">
      <Navbar theme={theme} setTheme={setTheme} />
      <Header />
      <HealthMatrix />
    </div>
  )
}

export default App
