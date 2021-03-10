import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"

import "./App.css"

// import { AuthProvider } from "./context/auth"
// import AuthRoute from './util/AuthRoute';
import Dashboard from "./components/Dashboard"
import Search from "./components/Search"
import Login from "./components/Login"
import Redlines from "./components/Redlines"
import Favorites from "./components/Favorites"
import Releases from "./components/Releases"
import MomentSpec from "./components/MomentSpec"

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://spy-glass.herokuapp.com",
})

const client = new ApolloClient({
  // authLink.concat
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    // <AuthProvider>
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/Favorites" component={Favorites} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Redlines" component={Redlines} />
        <Route exact path="/Releases" component={Releases} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/MomentSpec" component={MomentSpec} />
      </Router>
    </ApolloProvider>
  )
}

export default App
