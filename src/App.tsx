import * as React from 'react';
import Routers from './routers'

import './style.css'

class App extends React.Component {
  public render() {
    return (
      <Routers {...this.props} />
    );
  }
}

export default App;
