import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import HomePageWithoutHeader from './routes/home';
import ApplyForm from './routes/apply';
import OurClientsRoute from './routes/ourClients';
import WalkinsRoute from './routes/walkins';

function AppRouter() {
  return (
    <Router>
      <div className='__KA__route_container' >
        <Route path="/home" exact component={HomePageWithoutHeader} />
        <Route path="/apply" component={ApplyForm} />
        <Route path="/ourClients" component={OurClientsRoute} />
        <Route path="/walkins" exact component={WalkinsRoute} />
        <Route path="/" exact component={HomePageWithoutHeader} />
      </div>
    </Router>
  );
}

export default AppRouter;