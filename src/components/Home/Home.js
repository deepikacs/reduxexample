import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Login from '../Login';

class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      show:true,
    };
  }
  handleClick(){
    this.setState({'show':!this.state.show});
    console.log(this.state.show)
  }
  render() {
    return (
      <div>
          <Button>Home</Button>
        <Button color="primary" onClick={() => this.handleClick()}>Login</Button>
        {this.state.show ? '' : <Login />}
      </div>
     
    );
  }
}

export default Home;
