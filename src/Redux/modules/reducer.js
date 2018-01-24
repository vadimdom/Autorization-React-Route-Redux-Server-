  import * as types from '../../constants/ActionTypes';
  import assign from 'lodash';
  
  const initialState = {
    users: [1],
    usersById: {
      1: {
        id: 1,
        name: 'Vadim',
        login: "admin",
        password: "admin",
        Email: "vadim.dom_96@mail.ru",
        secondName: "Chernikov"
      }
    },
    activeUser: 0
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
  
      case types.SIGN_USER:
        const newId = state.users[state.users.length-1] + 1;
        const newUser = Object.assign({}, state.usersById,
          {
            [newId]: {
              id: newId,
              name: action.name,
              login: action.login,
              secondName: action.secondName,
              Email: action.Email,
              password: action.password
            }
          });
          alert("Registration is successfull!");
          alert("Redux is work!");
        return Object.assign({}, state, 
          {
            users: state.users.concat(newId),
            usersById: newUser
          });
  

        case types.AUTORIZE_USER:
            let userId;
            for (var key in state.usersById) {
              if (state.usersById[key].login === action.login && state.usersById[key].password === action.password) {
                userId = state.usersById[key].id;
              } else {
                userId = 0;
              }
            }
            if (userId !== 0) {
              alert("Autorization is successfull!");
              alert("Redux is work!");
            } else {
              alert("Input correct login and/or password or sign up!");
            }
            return Object.assign({}, state, 
              {
                activeUser: userId
              });

            case types.SIGN_OUT_USER:
              return Object.assign({}, state, 
                {
                  activeUser: 0
                });
            

              case types.CHANGE_USER_NAME:
                const changedUserName = Object.assign({}, state.usersById[state.activeUser],
                  {
                    name: action.name
                  });
                const newUsersByIdName = Object.assign({}, state.usersById,
                  {
                    [state.activeUser]: changedUserName
                  });
                  return Object.assign({}, state, 
                    {
                      usersById: newUsersByIdName
                    });

                case types.CHANGE_USER_SECOND_NAME:
                  const changedUserSecondName = Object.assign({}, state.usersById[state.activeUser],
                    {
                      secondName: action.secondName
                    });
                  const newUsersByIdSecondName = Object.assign({}, state.usersById,
                    {
                      [state.activeUser]: changedUserSecondName
                    });
                    return Object.assign({}, state, 
                      {
                        usersById: newUsersByIdSecondName
                      });

                case types.CHANGE_USER_EMAIL:
                  const changedUserEmail = Object.assign({}, state.usersById[state.activeUser],
                    {
                      Email: action.email
                    });
                  const newUsersByIdEmail = Object.assign({}, state.usersById,
                    {
                      [state.activeUser]: changedUserEmail
                    });
                    return Object.assign({}, state, 
                      {
                        usersById: newUsersByIdEmail
                      });

                case types.CHANGE_USER_LOGIN:
                  const changedUserLogin = Object.assign({}, state.usersById[state.activeUser],
                    {
                      login: action.login
                    });
                  const newUsersByIdLogin = Object.assign({}, state.usersById,
                    {
                      [state.activeUser]: changedUserLogin
                    });
                    return Object.assign({}, state, 
                      {
                        usersById: newUsersByIdLogin
                      });

                case types.CHANGE_USER_PASSWORD:
                  const changedUserPassword = Object.assign({}, state.usersById[state.activeUser],
                    {
                      password: action.password
                    });
                  const newUsersByIdPassword = Object.assign({}, state.usersById,
                    {
                      [state.activeUser]: changedUserPassword
                    });
                    return Object.assign({}, state, 
                      {
                        usersById: newUsersByIdPassword
                      });
      default:
        return state;
    }
  }
  