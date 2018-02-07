import React from 'react';
import {Link} from 'react-router-dom';
import store from '../../../Redux/store.js';
// import {getState} from 'redux';

import './ProfilePage.less';

const RenderChangeField = (props) => {
  const {changeProp, changePropValue, changePropNewValue, changePropOnChange, changePropButtonOnClick} = props;

  return (
    <div>
      <h3 className="title-little"> Your {changeProp}: {changePropValue}</h3>
      <div className="container">
        <input
          type="text"
          placeholder="New value..."
          className="field"
          value={changePropNewValue}
          onChange={changePropOnChange}
        />
        <Link to="/profile">
          <button onClick={changePropButtonOnClick}> Change </button>
        </Link>
      </div>
    </div>
  );
};

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newlogin: '',
      newpassword: '',
      newname: '',
      newEmail: '',
      newsecondName: '',
    };
    // this.changeName = this.changeName.bind(this);
    // this.changeSecondName = this.changeSecondName.bind(this);
    // this.changeEmail = this.changeEmail.bind(this);
    // this.changeLogin = this.changeLogin.bind(this);
    // this.changePassword = this.changePassword.bind(this);
    // this.newLoginChange = this.newLoginChange.bind(this);
    // this.newPasswordChange = this.newPasswordChange.bind(this);
    // this.newNameChange = this.newNameChange.bind(this);
    // this.newEmailChange = this.newEmailChange.bind(this);
    // this.newSecondNameChange = this.newSecondNameChange.bind(this);
    // this.renderAuthorized = this.renderAuthorized.bind(this);
    // this.renderNotAuthorized = this.renderNotAuthorized.bind(this);
  }

  newLoginChange = (event) => {
    this.setState({
      newlogin: event.target.value,
    });
  }

  newPasswordChange = (event) => {
    this.setState({
      newpassword: event.target.value,
    });
  }

  newNameChange = (event) => {
    this.setState({
      newname: event.target.value,
    });
  }

  newEmailChange = (event) => {
    this.setState({
      newEmail: event.target.value,
    });
  }

  newSecondNameChange = (event) => {
    this.setState({
      newsecondName: event.target.value,
    });
  }

  changeLogin = () => {
    this.props.changeUserLogin(this.state.newlogin);
    // console.log(store.getState());
    alert('Login is changed!Redux is work!');
    this.setState({
      newlogin: '',
    });
  }

  changePassword = () => {
    this.props.changeUserPassword(this.state.newpassword);
    // console.log(store.getState());
    alert('Password is changed!Redux is work!');
    this.setState({
      newpassword: '',
    });
  }

  changeName = () => {
    this.props.changeUserName(this.state.newname);
    // console.log(store.getState());
    alert('Name is changed!Redux is work!');
    this.setState({
      newname: '',
    });
  }

  changeEmail = () => {
    this.props.changeUserEmail(this.state.newEmail);
    // console.log(store.getState());
    alert('Email is changed!Redux is work!');
    this.setState({
      newEmail: '',
    });
  }

  changeSecondName= () => {
    this.props.changeUserSecondName(this.state.newsecondName);
    // console.log(store.getState());
    alert('Second name is changed!Redux is work!');
    this.setState({
      newsecondName: '',
    });
  }

  renderAuthorized = (user) => {
    return (
      <div className="ProfilePage">
        <h2 className="title">
          Here you can change your data!
        </h2>
        <RenderChangeField
          changeProp="name"
          changePropValue={user.name}
          changePropNewValue={this.state.newname}
          changePropOnChange={this.newNameChange}
          changePropButtonOnClick={this.changeName}
        />
        <RenderChangeField
          changeProp="second name"
          changePropValue={user.secondName}
          changePropNewValue={this.state.newsecondName}
          changePropOnChange={this.newSecondNameChange}
          changePropButtonOnClick={this.changeSecondName}
        />
        <RenderChangeField
          changeProp="Email"
          changePropValue={user.Email}
          changePropNewValue={this.state.newEmail}
          changePropOnChange={this.newEmailChange}
          changePropButtonOnClick={this.changeEmail}
        />
        <RenderChangeField
          changeProp="login"
          changePropValue={user.login}
          changePropNewValue={this.state.newlogin}
          changePropOnChange={this.newLoginChange}
          changePropButtonOnClick={this.changeLogin}
        />
        <div className="container">
          <input
            type="password"
            placeholder="New password..."
            className="pass-field"
            value={this.state.newpassword}
            onChange={this.newPasswordChange}
          />
          <Link to="/profile">
            <button onClick={this.changePassword}> Change </button>
          </Link>
        </div>
      </div>
    );
  }

  renderNotAuthorized = () => {
    return (
      <div className="ProfilePage">
        <h2 className="title">
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