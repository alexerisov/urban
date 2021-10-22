import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <PrivateRoute path="/profile" authed={true}>
                      <ProfilePage />
                  </PrivateRoute>
                  <Route path="/">
                      <LoginPage/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
