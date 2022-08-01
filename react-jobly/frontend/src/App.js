import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"; // useState = hook, useEffect = hook
import { BrowserRouter } from "react-router-dom"; // BrowserRouter = component that wraps the entire app
import useLocalStorage from "./hooks/useLocalStorage"; // useLocalStorage = hook that allows us to use local storage
import JoblyApi from "../JoblyApi"; // JoblyApi = class that allows us to call the Jobly API
import UserContext from "../Users/UserContext"; // UserContext = class that allows us to use the user context
import { jwt } from "jsonwebtoken"; // jwt = function that allows us to decode the token
import { useNavigate } from "react-router-dom"; // useNavigate = hook that allows us to use the navigate function

// token_storage_id = the key that we will use to store the token in local storage
export const TOKEN_STORAGE_ID = "jobly-token";


function App() {
  /**
   * token, setToken = variables that we will use to store the token in local storage
   * currentUser, setCurrentUser = variables that we will use to store the current user in local storage
   * infoLoaded, setInfoLoaded = variables that we will use to store whether or not the info has loaded
   * error, setError = variables that we will use to store the error in local storage
   * navigate = variable that we will use to store the navigate function
   */
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate = hook that allows us to use the navigate function

  //loginUser = function that will log in the user
  async function loginUser(user) {
    try {
      const { token } = await JoblyApi.login(user);
      setToken(token);
      setCurrentUser(jwt.decode(token));
    } catch (err) {
      setError(err.message);
    }
  }

  async function signupUser(user) {
    try {
      const { token } = await JoblyApi.signup(user);
      setToken(token);
      setCurrentUser(jwt.decode(token));
    } catch (err) {
      setError(err.message);
    }
  }
  
  async function logoutUser() {
    setToken(null);
    setCurrentUser(null);
  }



  


}

export default App;