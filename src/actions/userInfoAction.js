import axios from 'axios';
import { browserHistory } from 'react-router';
export function LoginAction(data){
  return (dispatch) => {
    dispatch({type:'LOGIN',username:data});
    browserHistory.push('/');
  }
}
