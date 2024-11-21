import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Navbar from "./components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <Navbar />
      <div className="content">
        <div className="data">
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <h2>CSS Color Scheme Change</h2>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Color mode change using CSS <code>color-scheme</code> property
            </p>
            <p>
              Color and background-color element properties uses{" "}
              <code>light-dark()</code> to change colors
            </p>
            <p>
              Selected theme is stored in localStorage (default to "auto" /
              system)
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
