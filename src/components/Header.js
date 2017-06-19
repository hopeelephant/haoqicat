import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {LoginAction} from '../actions/userInfoAction';

class Header extends Component {
    render() {
      console.log('componentWillMount', this.props.isAuthenticated, this.props.currentUser)
        let alreadyLogin = (
          <div>
              <Link>{this.props.currentUser}</Link>
              <Link>退出</Link>
          </div>
        )

        let NoneLogin = (
          <div>
            <Link to="signup">注册</Link>
            <Link to="login">登录</Link>
          </div>
        )

        return (
            <div className="header">
                <div className="header-left">
                    <Link to="/">首页</Link>
                </div>
                <div className="header-right">
                    {this.props.isAuthenticated
                        ? alreadyLogin
                        : NoneLogin}
                </div>
            </div>
        )
    }
}
Header.propTypes = {
    isAuthenticated: React.PropTypes.bool,
    currentUser: React.PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
    return {currentUser: state.currentUser, isAuthenticated: state.isAuthenticated}
}
export default connect(mapStateToProps)(Header);
