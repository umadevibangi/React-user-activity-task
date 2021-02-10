import React from "react";
import { Route, Switch } from "react-router";
import Userlist from "../Screens/usersList";
import Activity from "../Screens/userActivity";
import Activity2 from "../Screens/userActivity2";
import appUrls from "../Config/appUrls";
import appContainers from "./appContainer"

const Routing = () => {
  return (

      <Switch>
        <Route exact path="/" component={Userlist} />
        <Route exact path={appUrls.USERLIST} component={Userlist} />
        <Route exact path={appUrls.USER_ACTIVITY} component={Activity} />
        <Route exact path={appUrls.USER_ACTIVITY2} component={Activity2} />

      </Switch>
    
  );
};
export default Routing;
