import React from "react";
import { useState, useEffect } from "react"; // useState = hook, useEffect = hook
import { BrowserRouter } from "react-router-dom"; // BrowserRouter = component that wraps the entire app
import useLocalStorage from "./hooks/useLocalStorage"; // useLocalStorage = hook that allows us to use local storage
import JoblyApi from "./JoblyApi"; // JoblyApi = class that allows us to call the Jobly API
import UserContext from "./context/UserContext"; // UserContext = class that allows us to use the user context
import { jwt } from "jsonwebtoken"; // jwt = function that allows us to decode the token

// token_storage_id = the key that we will use to store the token in local storage
export const TOKEN_STORAGE_ID = "jobly-token";


function App() {

}

export default App;