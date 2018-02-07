import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../../../Redux/store.js';
// import {getState} from 'redux';

import './SignUpPage.less';

const RenderInputField = (props) => {
  const {placeholderProp, inputPropOnChange} = props;

  return (
    <div>
      <input
        type="text"
        placeholder={placeholderProp}
        className="field"
        onChange={inputPropOnChange}
      />
    </div>
  );
};

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      name: '',
      email: '',
      secondName: '',
    };
  }

  loginChange = (event) => {
    this.setState({
      login: event.target.value,
    });
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  secondNameChange = (event) => {
    this.setState({
      secondName: event.target.value,
    });
  }

  pushUser = (event) => {
    this.props.signUser(this.state.login, this.state.name, this.state.secondName, this.state.email, this.state.password);
    this.setState({
      login: '',
      password: '',
      name: '',
      email: '',
      secondName: '',
    });
    // console.log(store.getState());
  }

  renderAuthorized = () => {
    return (
      <div className="SignUpPage">
        <h2 className="title">
          You are autorized!
        </h2>
      </div>
    );
  }

  renderNotAuthorized = () => {
    return (
      <div className="SignUpPage">
        <h2 className="title">
          Please enter your registration data:
        </h2>
        <RenderInputField
          placeholderProp="Name..."
          inputPropOnChange={this.nameChange}
        />
        <RenderInputField
          placeholderProp="Second Name..."
          inputPropOnChange={this.secondNameChange}
        />
        <RenderInputField
          placeholderProp="Email..."
          inputPropOnChange={this.emailChange}
        />
        <RenderInputField
          placeholderProp="Login..."
          inputPropOnChange={this.loginChange}
        />
        <div>
          <input
            type="password"
            placeholder="Password..."
            className="field"
            onChange={this.passwordChange}
          />
        </div>
        <Link to="/auth">
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