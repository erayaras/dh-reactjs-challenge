import React from "react"
import "./App.scss"
import SideNavigator from "./components/organisms/SideNavigator/SideNavigator.component"

function App() {
  return (
    <div className="app-container">
      <SideNavigator />
      <main className="app-content"></main>
    </div>
  )
}

export default App
