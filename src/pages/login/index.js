import React,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {actionCreators} from './store'

class Login extends PureComponent{
 render() {
        const{ loginStatus} = this.props;
        if(!loginStatus){

          return (
            <LoginWrapper>
              <LoginBox>
                {/* innerRef拿到真实的虚拟dom */}
                <Input placeholder="账号" ref={(input)=>{this.account = input}} />
                <Input placeholder="密码" type="password" ref={(input)=>{this.password = input}}/>
                <Button onClick={()=>this.props.login(this.account,this.password)}>登陆</Button>
              </LoginBox>
               
            </LoginWrapper>
          )   
        }else{
          return <Redirect to="/"></Redirect>
        }
        
    }
    
}

const mapState = (state)=>({
  loginStatus:state.getIn(['login','login'])
})

const mapDispatch = (dispatch)=>({
    login(accountElem,passwordElem){
      
      dispatch(actionCreators.login(accountElem.value,passwordElem.value));
      // console.log(passwordElem.value);
      
    }
})


export default connect( mapState,mapDispatch)(Login);
