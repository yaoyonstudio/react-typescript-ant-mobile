import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';

class MyMenu extends React.Component {
  public render() {
    return (
      <nav className="MyMenu">
        <ul className="flex-r flex-c-c">
          <li>
            <ReactRouterDom.Link to="/">Home</ReactRouterDom.Link>
          </li>
          <li>
            <ReactRouterDom.Link to="/test">Test</ReactRouterDom.Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MyMenu;
