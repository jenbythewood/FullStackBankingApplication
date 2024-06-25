import React from "react";
//import "./App.css";

import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { UserContext } from "./components/createcontext";

import Home from "./components/home";
import CreateAccount from "./components/createaccount";
import Login from "./components/login";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/alldata";
import NavBar from "./components/navbar";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Test Tester",
              email: "test@test.com",
              password: "12345678",
              balance: 100,
            },
          ],
        }}
      >
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
