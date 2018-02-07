import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import App from '../pages/App/App.jsx';
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage.jsx';
import SignUpPage from '../pages/SignUpPage/SignUpPage.jsx';
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../Redux/modules/action.js';

@connect(state => (
  {
    users: state.users,
  }))

class Application extends Component {
  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <BrowserRouter>
        <App signOutUser={actions.signOutUser}>
          <Route
            path="/auth"
            render={() => <AuthorizationPage authUser={actions.authUser} />}
          />
          <Route
            path="/sign"
            render={() => <SignUpPage signUser={actions.signUser} />}
          />
          <Route
            path="/profile"
            render={() =>
            (<ProfilePage
              changeUserName={actions.changeUserName}
              changeUserSecondName={actions.changeUserSecondName}
              changeUserEmail={actions.changeUserEmail}
              changeUserLogin={actions.changeUserLogin}
              changeUserPassword={actions.changeUserPassword}
            />)}
          />
        </App>
      </BrowserRouter>
    );
  }
}

export default Application;