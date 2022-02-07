import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CREATE_USER, SET_STATUS_USER } from '../constants';
import { StatusUser } from '../reducers/statusUserReducer';


export interface userData {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export type TypeActionCreateUser = {type: typeof CREATE_USER, payload: userData}

const setStatusUser = (data: StatusUser) => ({ type: SET_STATUS_USER, payload: data });

const createUser = (data: userData) => ({ type: CREATE_USER, payload: data });

export function asyncCreateUser(controlButton: (state: boolean) => void) {
  return async function(dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
    controlButton(true)
    await Promise.resolve().then(() => {
      setTimeout(() => {
        const data = {
          message: 'string',
          token: `${Date.now()}`,
          refreshToken: 'string',
          userId: 'string',
          name: 'string',
        }
        dispatch(createUser(data));
        dispatch(setStatusUser({name: data.name, isAuth: true}));
        controlButton(false)
      }, 1500)
    })
  }
}