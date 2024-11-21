import { useEffect, useState } from "react"
import styles from "./Navbar.module.css"

type Mode = "auto" | "light" | "dark"

const Navbar = () => {
  const [selectedMode, setSelectedMode] = useState<Mode>()

//   Persist the selected mode in localStorage

  useEffect(() => {
    const storedMode = localStorage?.getItem("selectedMode")
    // console.log("STORED MODE", storedMode)
    if (storedMode === null) {
    console.log("ENTRA")
//       return setSelectedMode(storedMode as Mode)
    }
//     setSelectedMode("auto")
//     localStorage.setItem("selectedMode", "auto")
  }, [])

//   useEffect(() => {
//     localStorage.setItem("selectedMode", selectedMode as Mode)
//   }, [selectedMode])

    console.log("SELECTED MODE", selectedMode)
  return (
    <nav className={styles.container}>
      <label htmlFor="theme">Theme:</label>
      <select
        value={selectedMode}
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
