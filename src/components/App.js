import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import store from '../store';
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="root">
                    <Header/> {this.props.children}
                    <Footer/>
                </div>
            </Provider>
        )
    }
}
export default App
