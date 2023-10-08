import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import "./App.scss"
import ErrorBoundary from "./components/organisms/ErrorBoundary/ErrorBoundary.component"
import SideNavigator from "./components/organisms/SideNavigator/SideNavigator.component"
import Routes from "./modules/Routes"

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="app-container">
          <SideNavigator />
          <main className="app-content">
            <Routes />
          </main>
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
