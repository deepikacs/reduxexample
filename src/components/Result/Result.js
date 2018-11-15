import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
  constructor(props){
    super(props);
  }
 

  render() {
    return (
      <div>
        email:{this.props.email}

       password: {this.props.password}
      </div>
     
    );
  }
}
const mapStateToProps = (state) => {
    const { email,password} = state.loginData;
    return { email,password};
  };

  export default connect(mapStateToProps, {

  })(Result);