import { useState } from "react"
import assets from "./assets/assets"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"


function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>

      <Navbar />
      <Header />
    </>
  )
}

export default App
