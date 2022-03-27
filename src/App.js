import React, {useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";
import {auth} from "./components/firebase";
function App() {
const [{},dispatch]= useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            {/* <Orders /> */}
          </Route>
          <Route path="/checkout">
            <Header />
            {/* <Checkout /> */}
          </Route>
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}>
              <Payment />
            </Elements> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      {/* <ToastContainer style={{ marginTop: "45px" }} /> */}
    </Router>
  );
}

export default App;
