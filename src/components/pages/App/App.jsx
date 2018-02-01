import React from 'react';
import {Link} from 'react-router-dom';
import store from '../../../Redux/store.js';
import {getState} from 'redux';

import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.renderAuthorized = this.renderAuthorized.bind(this);
    this.renderNotAuthorized = this.renderNotAuthorized.bind(this);
  }

  signOut(event) {
    this.props.signOutUser();
    // console.log(store.getState());
  }

  renderAuthorized(user) {
    return (
      <div className="main">
        <header>
          <div className="navigation">
            <ul>
              {/* <li>
                <Link to="/auth">Autorization</Link>
              </li>
              <li>
                <Link to="/sign">Sign up</Link>
              </li> */}
              <li>
                <Link to="/profile">{user.login}</Link>
              </li>
              <li>
                <Link to="/" onClick={this.signOut}> Sign out</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="content">
          {this.props.children}
        </div>
        <footer>
          © 2018 Vadim Chernikov Software
        </footer>
      </div>
    );
  }

  renderNotAuthorized() {
    return (
      <div className="main">
        <header>
          <div className="navigation">
            <ul>
              <li>
                <Link to="/auth">Autorization</Link>
              </li>
              <li>
                <Link to="/sign">Sign up</Link>
              </li>
              {/* <li>
                <Link className="profile" to="/profile">Profile</Link>
              </li> */}
            </ul>
          </div>
        </header>
        <div className="content">
          {this.props.children}
        </div>
        <footer>
          © 2018 Vadim Chernikov Software
        </footer>
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

export default App;