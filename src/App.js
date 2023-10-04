import React from "react"
import "./App.scss"
import SideNavigator from "./components/organisms/SideNavigator/SideNavigator.component"
import Question from "./modules/Assessment/pages/Question.component"

function App() {
  return (
    <div className="app-container">
      <SideNavigator />
      <main className="app-content">
        <Question />
      </main>
    </div>
  )
}

export default App
