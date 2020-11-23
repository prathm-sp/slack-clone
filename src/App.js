import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import { useStateValue } from "./Context/Stateprovider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
