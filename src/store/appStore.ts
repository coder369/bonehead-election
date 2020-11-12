import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppReducer } from '../reducers/appReducers';

export const appStore = createStore(
    AppReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
