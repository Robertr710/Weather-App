  
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { NoMatch } from './components/pages/NoMatch';
import { NavigationBar } from './components/header/NavigationBar';
import Footer from './components/footer/footer';
import {Content} from './components/content/content';





class App extends Component {
  render() {
  
  
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Content >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
            </Content >
            <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;


