import { useEffect } from "react"
import assets from "../assets/assets"


function DarkTheme({ theme, setTheme }) {
    useEffect(() => {
        const currentTheme = window.matchMedia('(prefer-color-scheme:dark)'.match)
        setTheme(theme || currentTheme ? "dark" : "light")
    },
        [])
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")

        }

        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <div className="flex items-center">
            {theme === "dark" ? (<img src={assets.sun} className="size-5" alt="" onClick={() => (setTheme("light"))} />)
                :
                (
                    <img src={assets.moon} className="size-5" onClick={() => (setTheme("dark"))} />
                )}
        </div>

    )
}
export default DarkTheme;