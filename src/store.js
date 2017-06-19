import {createStore,applyMiddleware,compose} from 'redux';
import usernameReducer from './reducers/index';
import thunk from 'redux-thunk';
let defaultState = {
  isAuthenticated:false,
  currentUser: ''
};
let store = createStore(usernameReducer,defaultState,compose(applyMiddleware(thunk)));
export default store;
