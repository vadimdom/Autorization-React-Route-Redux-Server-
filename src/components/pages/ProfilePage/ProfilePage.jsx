import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../../Redux/store.js';
import { getState } from 'redux';

//import './ProfilePage.less';

class ProfilePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newlogin: "",
            newpassword: "",
            newname: "",
            newEmail: "",
            newsecondName: "",
        }

        this.changeName = this.changeName.bind(this);
        this.changeSecondName = this.changeSecondName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);

        this.newLoginChange = this.newLoginChange.bind(this);
        this.newPasswordChange = this.newPasswordChange.bind(this);
        this.newNameChange = this.newNameChange.bind(this);
        this.newEmailChange = this.newEmailChange.bind(this);
        this.newSecondNameChange = this.newSecondNameChange.bind(this);
        
        this.renderAuthorized = this.renderAuthorized.bind(this);
        this.renderNotAuthorized = this.renderNotAuthorized.bind(this);
    }

    newLoginChange(event) {
        this.setState({
            newlogin: event.target.value
        });
    }

    changeLogin(){
        
        this.props.changeUserLogin(this.state.newlogin);
        console.log(store.getState());
        alert("Login is changed!Redux is work!");
        this.setState({
            newlogin: ""
        });
    }

    newPasswordChange(event) {
        this.setState({
            newpassword: event.target.value
        });
    }

    changePassword(){
        this.props.changeUserPassword(this.state.newpassword);
        console.log(store.getState());
        alert("Password is changed!Redux is work!");
        this.setState({
            newpassword: ""
        });
    }

    newNameChange(event) {
        this.setState({
            newname: event.target.value
        });
    }

    changeName(){
        this.props.changeUserName(this.state.newname);
        console.log(store.getState());
        alert("Name is changed!Redux is work!");
        this.setState({
            newname: ""
        });
    }

    newEmailChange(event) {
        this.setState({
            newEmail: event.target.value
        });
    }

    changeEmail(){
        this.props.changeUserEmail(this.state.newEmail);
        console.log(store.getState());
        alert("Email is changed!Redux is work!");
        this.setState({
            newEmail: ""
        });
    }

    newSecondNameChange(event) {
        this.setState({
            newsecondName: event.target.value
        });
    }

    changeSecondName(){
        this.props.changeUserSecondName(this.state.newsecondName);
        console.log(store.getState());
        alert("Second name is changed!Redux is work!");
        this.setState({
            newsecondName: ""
        });
    }

    renderAuthorized(user) {
        return (
                <div className='ProfilePage'>
                    <h2 className='title'>
                        Here you can change your data!
                    </h2>
                    <div>
                        <p> Your name: {user.name}</p>
                        <input type="text" placeholder="New name..." className="field" value={this.state.newname} onChange={this.newNameChange} />
                        <Link to='/profile'>
                            <button onClick={this.changeName}> Change </button>
                        </Link>
                    </div>
                    <div>
                        <p> Your second name: {user.secondName}</p>
                        <input type="text" placeholder="New second Name..." className="field" value={this.state.newsecondName} onChange={this.newSecondNameChange} />
                        <Link to='/profile'>
                            <button onClick={this.changeSecondName}> Change </button>
                        </Link>
                    </div>
                    <div>
                        <p> Your Email: {user.Email}</p>
                        <input type="text" placeholder="New Email..." className="field" value={this.state.newEmail}  onChange={this.newEmailChange} />
                        <Link to='/profile'>
                            <button onClick={this.changeEmail}> Change </button>
                        </Link>
                    </div>
                    <div>
                        <p> Your login: {user.login}</p>
                        <input type="text" placeholder="New login..." className="field" value={this.state.newlogin} onChange={this.newLoginChange} />
                        <Link to='/profile'>
                            <button onClick={this.changeLogin}> Change </button>
                        </Link>
                    </div>
                    <div>
                        <input type="password" placeholder="New password..." className="pass-field"  value={this.state.newpassword} onChange={this.newPasswordChange} />
                        <Link to='/profile'>
                            <button onClick={this.changePassword}> Change password </button>
                        </Link>
                    </div>
                </div>
            );
    }

    renderNotAuthorized() {
        return (
                <div className='ProfilePage'>
                    <h2 className='title'>
                        You should autorize first!!
                    </h2>
                </div>
            );
    }

    render() {
        const currentState = store.getState();
        const user = currentState.reducer.usersById[currentState.reducer.activeUser];
        if (user) {
            return this.renderAuthorized(user);
        } else {
            return this.renderNotAuthorized();
        }
    }
}

export default ProfilePage;