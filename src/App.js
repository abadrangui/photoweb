import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/upload" exact>
            <UploadScreen />
          </Route>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
        </Switch>
    </Router>
  );
}