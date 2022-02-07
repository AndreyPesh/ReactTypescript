import { combineReducers, Store } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './reducers/usersReducer';
import statusUsersReducer from './reducers/statusUserReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userStatus: statusUsersReducer,
  userData: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof store.getState>