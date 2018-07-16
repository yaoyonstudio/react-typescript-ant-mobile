/*
usage: 
ShowToast('您的请求提交成功')
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toastel extends Component {
  constructor (props) {
    super(props)
    this.close = this.close.bind(this)
  }

  close () {
    // 点击时unmount自己
    ReactDOM.unmountComponentAtNode(this.props.name)
  }

  componentDidMount () {
    if (this.props.timeout && parseInt(this.props.timeout, 10)) {
      setTimeout(() => {
        this.close()
      }, parseInt(this.props.timeout, 10))
    }
  }

  componentWillUnmount () {
    // unmount时删除dom
    document.body.removeChild(this.props.name)
  }

  render() {
    return (
      <div className="Toast" onClick={() => this.close()}>
        <section>
          {this.props.msg ? (
            <p>{this.props.msg}</p>
          ) : ''}
        </section>
      </div>
    );
  }
}

export default function ShowToast (msg, timeout) {
  var div = document.createElement('div')
  ReactDOM.render(
    <Toastel name={div} msg={msg} timeout={timeout}></Toastel>,
    document.body.appendChild(div)
  )
}
