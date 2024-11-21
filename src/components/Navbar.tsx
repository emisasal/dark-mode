import { useEffect, useState } from "react"
import styles from "./Navbar.module.css"

type Mode = "auto" | "light" | "dark" | null

const Navbar = () => {
  const [selectedMode, setSelectedMode] = useState<Mode>()
  const html = document.querySelector("html")

  useEffect(() => {
    const storedMode = localStorage?.getItem("selectedMode")

    if (!storedMode) {
      setSelectedMode("auto")
    }
    setSelectedMode(storedMode as Mode)
  }, [])

  const handleThemeChange = (mode: Mode) => {
    html?.style.setProperty(
      `color-scheme`,
      mode === "auto" ? "light dark" : mode
    )
  }

  useEffect(() => {
    if (selectedMode) {
      localStorage.setItem("selectedMode", selectedMode)
      handleThemeChange(selectedMode)
    }
  }, [selectedMode])

  return (
    <nav className={styles.container}>
      <label htmlFor="theme">Select theme:</label>
      <select
        value={selectedMode || ""}
        onChange={(e) => setSelectedMode(e.target.value as Mode)}
      >
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {/* <form>

        </form> */}
    </nav>
  )
}

export default Navbar
