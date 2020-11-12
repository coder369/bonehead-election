import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppReducer } from '../reducers/appReducers';
import thunk from 'redux-thunk';

export const appStore = createStore(
    AppReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
