import * as types from '../../constants/ActionTypes';

let nextUserId = 0
export function signUser(login, name, secondName, Email, password){
    return {
      type: types.SIGN_USER,
      id: nextUserId++,
      login, 
      name,
      secondName,
      Email,
      password
    };
  }

  export function authUser(login, password){
    return {
      type: types.AUTORIZE_USER,
      login, 
      password
    };
  }

  export function signOutUser(){
    return {
      type: types.SIGN_OUT_USER
    };
  }

  export function changeUserName(name){
    return {
      type: types.CHANGE_USER_NAME,
      name
    };
  }

  export function changeUserSecondName(secondName){
    return {
      type: types.CHANGE_USER_SECOND_NAME,
      secondName
    };
  }

  export function changeUserEmail(email){
    return {
      type: types.CHANGE_USER_EMAIL,
      email
    };
  }

  export function changeUserLogin(login){
    return {
      type: types.CHANGE_USER_LOGIN,
      login
    };
  }

  export function changeUserPassword(password){
    return {
      type: types.CHANGE_USER_PASSWORD,
      password
    };
  }