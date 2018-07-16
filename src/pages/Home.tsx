import * as React from 'react';
import MyMenu from '../components/MyMenu'
import { postService } from '../services'

import { Button } from 'antd-mobile'

import IPostItem from '../types/IPostItem'

export interface IStates {
  dataList: IPostItem[],
  name: string,
  page: number,
  pagesize: number
}

class Home extends React.Component<{}, IStates> {
  constructor(props: any) {
    super(props)
    this.state = {
	  name: 'ken',
      dataList: [],
      page: 1,
      pagesize: 6
    }
	this.getData = this.getData.bind(this)
  }

  public getData () {
	postService.getPosts({page: this.state.page, pagesize: this.state.pagesize}, (res: any) => {
	  this.setState({
        dataList: res
      })
	})
  }

  public componentDidMount () {
	console.log('Home Page Loaded')
  }

  public render() {
    return (
      <div className="main Home">
        <MyMenu />
        <div className="content">
          <p>Hello, {this.state.name}</p>
		  <Button type="primary" onClick={this.getData}>Get Posts</Button>
        </div>
      </div>
    );
  }
}

export default Home;
