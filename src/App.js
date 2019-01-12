import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout/BaseLayout';
import routers from './router/router';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Router>
        <BaseLayout {...this.props}>
          {routers.map((route, index) =>
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            )}
        </BaseLayout>
      </Router>
    )
  }
}

export default App;
