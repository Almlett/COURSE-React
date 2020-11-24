import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Projects from './components/projects/Projects.jsx';

import ProjectProvider from './context/projects/projectProvider.jsx';
import TaskProvider from './context/tasks/taskProvider.jsx';

function App() {

  return (
    <ProjectProvider>
      <TaskProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TaskProvider>
    </ProjectProvider>
  );
}

export default App;
