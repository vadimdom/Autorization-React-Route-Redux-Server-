import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './modules/rootReducer.js';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(promise(), thunk))
    );

    export default store;