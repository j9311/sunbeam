import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
import CodexSet from "./components/CodexSet"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import TermsofService from "./components/TermsofService"

import { UserProvider } from "./Contexts"

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api/v1/graphql"
      : "https://spy-glass.herokuapp.com/api/v1/graphql",
})

const client = new ApolloClient({
  // authLink.concat
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/set/:setID" component={CodexSet} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/redlines" component={Redlines} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/moment-spec" component={MomentSpec} />
            <Route exact path="/termsofservice" component={TermsofService} />
          </Switch>
          <Footer />
        </Router>
      </ApolloProvider>
    </UserProvider>
  )
}

export default App
