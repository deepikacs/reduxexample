import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { validateEmailAction } from '../../actions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        data1:true,
        email2:'',
        psw2:'',
    };
    }
    handleEmailChange(e){
    this.setState({'email2':e.target.value});
    }
    handlePasswordChange(e){
        this.setState({'psw2':e.target.value})
    }
    submit(){
        let email1=this.state.email2;
        let psw1=this.state.psw2;
        // this.setState({'data1':!this.state.data1});
        // console.log(this.state.data1)
        this.props.validateEmailAction(email1,psw1);
        // console.log(this.props.validateEmailAction(email1));
    }
  
 
  render() {
    return (
      <div>
          <label>Email</label>
        <input type="email" placeholder="email" onChange={(e)=> this.handleEmailChange(e) } />
        <label>Password</label>
        <input type="password" placeholder="Password"  onChange={(e)=> this.handlePasswordChange(e)} />
        <Button onClick={()=> {this.submit()}}>Submit</Button>
      </div>
     
    );
  }
}
const mapStateToProps = (state) => {
    const { user } = state.loginData;
    return { user };
  };
  
  export default connect(mapStateToProps, {
    validateEmailAction
  })(Login);
  
