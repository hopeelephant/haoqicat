import React,{Component} from 'react';
import {Link} from 'react-router';
class Signup extends Component {
    constructor() {
        super();
    }
    handleForm(e){
      e.preventDefault();
    }
    render() {
        return (
            <div className="signup">
                <form onSubmit={this.handleForm.bind(this)}>
                  <div>
                    <label>用户名</label>
                    <input type="text" placeholder="username" ref="username"/><br/>
                    <label>密码</label>
                    <input type="password" placeholder="password" ref="password"/><br/>
                    <button type="submit">注册</button><br/>
                    <Link to="/login">已有账号？请登录</Link>
                  </div>
                </form>
            </div>
        )
    }
}
export default Signup
