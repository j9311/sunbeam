import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import { Container } from 'semantic-ui-react';

// import 'semantic-ui-css/semantic.min.css';
import "./App.css"

// import { AuthProvider } from "./context/auth"
// import AuthRoute from './util/AuthRoute';
import Dashboard from "./components/Dashboard"
import Search from "./components/Search"
import Login from "./components/Login"
import Redlines from "./components/Redlines"
import Favorites from "./components/Favorites"
import Releases from "./components/Releases"

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/Favorites" component={Favorites} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/Redlines" component={Redlines} />
      <Route exact path="/Releases" component={Releases} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </Router>
    // </AuthProvider>
  )
}

export default App
