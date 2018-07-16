import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';

import Home from '../pages/Home'
import Test from '../pages/Test'


class Routers extends React.Component {
  public render() {
    return (
      <div className="container">
        <ReactRouterDom.Switch>
           <ReactRouterDom.Route exact={true} path="/" component={Home} />
           <ReactRouterDom.Route exact={true} path="/test" component={Test} />
         </ReactRouterDom.Switch>
      </div>
    );
  }
}

export default Routers;