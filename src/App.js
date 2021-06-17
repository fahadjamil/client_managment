import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Client from "./Client";
import Employes from "./Employes";
import Header from "./Header";
import Edashboard from "./Edashboard";
import EmployeeDetail from "./EmployeeDetail";
import Loader from "./Loader";
import { createContext } from "react";

import {BookContext} from "./BookContext";
import { TokenContext } from "./TokenContext";





const App = (Props) => {
  // const [loggedIn, setIsloggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [Employee_id,setEmployee_id]=useState("");
  const [Enumber,setEnumber]=useState(null);
  const [ClientApi,setClientApi]=useState(null);
  const [EmployeeApi,setEmployeeApi]=useState(null);
  

  // const loginHanlder = () => {
  //   setIsloggedIn(true);
  // };

  console.log(user);
  console.log(Employee_id);
  console.log(ClientApi);
  console.log(EmployeeApi);

  return (
    <React.Fragment>
     
<BookContext.Provider value={{authToken:token,client:ClientApi,employee:EmployeeApi}}>
      {user && user.admin && (
        <Switch>
          <Route path="/" exact>
            <Header User={user}/>
            <Dashboard  Capi={setClientApi} Eapi={setEmployeeApi}/>
          </Route>
          <Route path="/Client" >
            <Header User={user}/>
            <Client/>
          </Route>
          <Route path="/Employes">
            <Header User={user}/>
            <Employes  Eid={setEmployee_id} />
          </Route>
         
          <Route path="/EmployeeDetail/:id">
            <Header User={user}/>
            <EmployeeDetail  />
          </Route>
         
          <Route path="/Loader">
            <Loader />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}

      {!token && (
        <Switch>
          <Route exact path="/">
            <Login author={setUser} authToken={setToken} />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}

      {user && user.user && (
        <Switch>
          <Route path="/" exact>
          <Header User={user}/>
            <Edashboard/>
          </Route>

          <Redirect to="/" />
        </Switch>
      )}
      </BookContext.Provider>
    </React.Fragment>
  );
  console.log(token);
};

export default App;


