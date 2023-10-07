import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import "./App.scss"
import SideNavigator from "./components/organisms/SideNavigator/SideNavigator.component"
import Routes from "./modules/Routes"

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideNavigator />
        <main className="app-content">
          <Routes />
        </main>
      </div>
    </Router>
  )
}

export default App
