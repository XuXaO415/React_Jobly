import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"; // useState = hook, useEffect = hook
import { BrowserRouter } from "react-router-dom"; // BrowserRouter = component that wraps the entire app
import useLocalStorage from "./hooks/useLocalStorage"; // useLocalStorage = hook that allows us to use local storage
import JoblyApi from "./JoblyApi"; // JoblyApi = class that allows us to call the Jobly API
import UserContext from "./context/UserContext"; // UserContext = class that allows us to use the user context
import { jwt } from "jsonwebtoken"; // jwt = function that allows us to decode the token

// token_storage_id = the key that we will use to store the token in local storage
export const TOKEN_STORAGE_ID = "jobly-token";


function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID); // setToken = function that allows us to set the token in local storage
  const [user, setUser] = useState(null); // setUser = function that allows us to set the user in state
  const [infoLoaded, setInfoLoaded] = useState(false); // setInfoLoaded = function that allows us to set the infoLoaded in state
  const [applicationsIds, setApplicationsIds] = useState([]); // setApplicationsIds = function that allows us to set the applicationsIds in state

  // useEffect = function that allows us to use the useEffect hook
  useEffect(() => {
    // if the token is not null, we will decode the token and set the user in state
    if (token) {
      const decodedToken = jwt.decode(token);
      setUser(decodedToken);
    }
  }
  , [token]);
  setInfoLoaded(true);
  // useEffect = function that allows us to use the useEffect hook
  useEffect(() => {
    // if the user is not null, we will call the Jobly API and set the applicationsIds in state
    if (user) {
      JoblyApi.getApplications(user.id)
        .then(res => setApplicationsIds(res.data));
    }
  }
  , [user]);
  let contextValue = {
    token,
    setToken,
    user,
    setUser,
    infoLoaded,
    setInfoLoaded,
    applicationsIds,
    setApplicationsIds
  };
  return (
    <BrowserRouter>
      <UserContext.Provider value={contextValue}>
        <div className="App">
          <header className="App-header">
            <h1>Jobly</h1>
          </header>
          <main>
            {/* <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/companies" component={Companies} />
            <Route path="/job/:id" component={Job} />
            <Route path="/company/:id" component={Company} />
            <Route path="/apply/:id" component={Apply} />
            <Route path="/profile" component={Profile} /> */}
          </main>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );

}

export default App;