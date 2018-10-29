import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from '../../views/Home/HomeContainer';

import './App.css';
import CategoryContainer from '../../views/Category/CategoryContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <Fragment>
           <div>
             <Route exact path="/" component={HomeContainer} />
             <Route exact path="/category/:name" component={CategoryContainer} />
           </div>
         </Fragment>
       </Router>
      </div>
    );
  }
}

export default App;
