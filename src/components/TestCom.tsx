import * as React from 'react';

export interface IProps {
  data: any,
  title: string
}

export interface IStates {
  name: string
}

class TestCom extends React.Component<IProps, IStates> {
  public state:IStates = {
    name: 'This is a test component'
  }

  public render() {
    return (
      <div className="TestCom">
        <h4>{this.state.name}</h4>
        <h5>{this.props.title}</h5>
        <p>{this.props.data.name}: {this.props.data.age}</p>
      </div>
    );
  }
}

export default TestCom;
