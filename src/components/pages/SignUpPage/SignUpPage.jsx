import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import store from '../../../Redux/store.js';
import { getState } from 'redux';

//import './SignUpPage.less';


class SignUpPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: [],
            login: "",
            password: "",
            name: "",
            Email: "",
            secondName: ""
        }

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.secondNameChange = this.secondNameChange.bind(this);
        this.pushUser = this.pushUser.bind(this);
        
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

    nameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    secondNameChange(event) {
        this.setState({
            secondName: event.target.value
        });
    }

    pushUser(event) {
        this.props.signUser(this.state.login, this.state.name, this.state.secondName, this.state.email, this.state.password);
        this.setState({
            login: "",
            password: "",
            name: "",
            Email: "",
            secondName: ""
        });
        console.log(store.getState());
    }

    renderAuthorized() {
        return (
                <div className='InboxPage'>
                    <h2 className='title'>
                        You are autorized!
                    </h2>
                </div>
            );
    }

    renderNotAuthorized() {
        return (
                <div className='InboxPage'>
                    <h2 className='title'>
                        Please enter your registration data:
                    </h2>
                    <div>
                        <input type="text" placeholder="Name..." className="field" onChange={this.nameChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Second Name..." className="field" onChange={this.secondNameChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Email..." className="field" onChange={this.emailChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="Login..." className="field" onChange={this.loginChange} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password..." className="field" onChange={this.passwordChange} />
                    </div>
                    <Link to='/auth'>
                        <button onClick={this.pushUser}> Sign Up </button>
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

export default SignUpPage;