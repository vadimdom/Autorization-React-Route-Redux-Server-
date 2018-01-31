import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../../Redux/store.js';
import { getState } from 'redux';

import './AuthorizationPage.less';

class AuthorizationPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: ""
        }

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.autorize = this.autorize.bind(this);
        this.renderAuthorized = this.renderAuthorized.bind(this);
        this.renderNotAuthorized = this.renderNotAuthorized.bind(this);
    }
    
    loginChange(event) {
        this.setState({
            login: event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    autorize(event){
        this.props.authUser(this.state.login, this.state.password);
        console.log(store.getState());
    }

    renderAuthorized() {
        return (
            <div className='AutorizationPage'>
                <h2 className='title'>
                    You are autorized!
                </h2>
            </div>
        );
    }

    renderNotAuthorized() {
        return (
                <div className='AutorizationPage'>
                    <h2 className='title'>
                        Please enter your login and password:
                    </h2>

                    <div>
                        <input type="text" placeholder="Login..." className="field" onChange={this.loginChange} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password..." className="field" onChange={this.passwordChange} />
                    </div>
                    <Link to='/auth'>
                        <button onClick={this.autorize}> Authorize </button>
                    </Link>
                </div>
            );
    }

    render() {
        const currentState = store.getState();
        const user = currentState.reducer.usersById[currentState.reducer.activeUser];
        if (user) {
            return this.renderAuthorized();
        } else {
            return this.renderNotAuthorized();
        }
    }
}

export default AuthorizationPage;