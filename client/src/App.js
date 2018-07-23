import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authCreator";
import { clearCurrentProfile } from "./actions/profileCreator";

//Import Global CSS
import "./App.css";

//Import Store
import store from "./store";

//Import Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

//Import Auth Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Accounts from "./components/dashboard/Accounts";
import Dashboard from "./components/dashboard/Dashboard";

//Import Account Components
import Account from "./components/account/Account";

//Import Common Component
import PrivateRoute from "./components/common/PrivateRoute";
import CreateAccount from "./components/dashboard/CreateAccount";

//Check for token
if (localStorage.jwtToken) {
  //set auth token header
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logoutUser
    store.dispatch(logoutUser());
    //clear current profile
    store.dispatch(clearCurrentProfile());
    //redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="appContainer">
              <Route exact={true} path="/" component={Landing} />
              <Route exact={true} path="/register" component={Register} />
              <Route exact={true} path="/login" component={Login} />
              <Switch>
                <PrivateRoute
                  exact={true}
                  path="/accounts"
                  component={Accounts}
                />
                <PrivateRoute
                  exact={true}
                  path="/dashboard"
                  component={Dashboard}
                />
                <PrivateRoute
                  exact={true}
                  path="/create-account"
                  component={CreateAccount}
                />
                <PrivateRoute
                  exact={true}
                  path="/accounts/:id"
                  component={Account}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
