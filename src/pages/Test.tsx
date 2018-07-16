import * as React from 'react';

import MyMenu from '../components/MyMenu'
import TestCom from '../components/TestCom'

export interface IPerson {
  age: number,
  name: string
}

export interface IStates {
  data: IPerson,
  title: string
}

class Test extends React.Component<IStates> {
  public state:IStates = {
    data: {
      age: 18,
      name: 'Kenny'
    },
    title: 'Here is my component'
  }

  public render() {
    return (
      <div className="main Test">
        <MyMenu />
        <div className="content">
          <h2>Test Page</h2>
          <TestCom data={this.state.data} title={this.state.title} />
        </div>
      </div>
    );
  }
}

export default Test;
