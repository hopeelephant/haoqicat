import React,{Component} from 'react';
import {Link} from 'react-router';
import {LoginAction} from '../actions/userInfoAction';
import { connect } from 'react-redux';
class Login extends Component {
    constructor() {
        super();
    }
    handleForm(e){
      e.preventDefault();
      this.props.LoginAction(this.refs.username.value);
      this.refs.loginForm.reset();
    }
    render() {
      console.log(this.props);
        return (
            <div className="signup">
                <form onSubmit={this.handleForm.bind(this)} ref="loginForm">
                  <div>
                    <label>用户名</label>
                    <input type="text" placeholder="username" ref="username"/><br/>
                    <label>密码</label>
                    <input type="password" placeholder="password" ref="password"/><br/>
                    <button type="submit">登录</button><br/>
                    <Link to="signup">没有账号？请注册</Link>
                  </div>
                </form>
            </div>
        )
    }
}
Login.propTypes = {
  LoginAction : React.PropTypes.func
}
const mapStateToProps = (state) => ({ });

export default connect(mapStateToProps,{LoginAction})(Login);
