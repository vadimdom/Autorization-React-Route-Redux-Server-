import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../../Redux/store.js';
import { getState } from 'redux';

import './App.less';


class App extends React.Component{

    constructor(props){
        super(props);
        
        this.signOut = this.signOut.bind(this);
        this.renderAuthorized = this.renderAuthorized.bind(this);
        this.renderNotAuthorized = this.renderNotAuthorized.bind(this);
    }

    signOut(event){        
        this.props.signOutUser();
        console.log(store.getState());
    }

    renderAuthorized(user){
        return (
            <div className='App'>
            <div className='menu-bar'>
                <div className='menu-item'>
                    <Link className='menu-item-link' to='/auth'>Autorization</Link>
                </div>

                <div className='menu-item'>
                    <Link className='menu-item-link' to='/sign'>Sign up</Link>
                </div>

                <div className='menu-item'>
                    <Link className='menu-item-link' to='/profile'>{user.login}</Link>
                </div>

                <div className='menu-item'>

                    <Link className='menu-item-link' to='/'>
                        <button onClick={this.signOut}> Sign out </button>
                    </Link>
                    
                </div>
            </div>


            <div className='content'>
                {this.props.children}
            </div>
        </div>
        );
    }

    renderNotAuthorized(){
        return (
            <div className='App'>
                <div className='menu-bar'>
                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/auth'>Autorization</Link>
                    </div>

                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/sign'>Sign up</Link>
                    </div>

                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/profile'>Profile</Link>
                    </div>
                </div>


                <div className='content'>
                    {this.props.children}
                </div>
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