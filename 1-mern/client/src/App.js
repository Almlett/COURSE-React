import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Projects from './components/projects/Projects.jsx';

import ProjectProvider from './context/projects/projectProvider.jsx';
import TaskProvider from './context/tasks/taskProvider.jsx';
import AlertProvider from './context/alerts/alertProvider.jsx';
import AuthProvider from './context/auth/authProvider.jsx';
import tokenAuth from './config/tokenAuth.js';

import PrivateRoute from './components/routes/privateRoute.jsx';
const token = localStorage.getItem('token');
if (token){
  tokenAuth(token);
}

function App() {

  return (
    <ProjectProvider>
      <TaskProvider>
        <AlertProvider>
          <AuthProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthProvider>
        </AlertProvider>
      </TaskProvider>
    </ProjectProvider>
  );
}

export default App;
