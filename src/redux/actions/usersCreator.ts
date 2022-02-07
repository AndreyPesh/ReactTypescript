import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CREATE_USER, SET_STATUS_USER } from '../constants';
import { StatusUser, UserData } from '../types/interfaces';

export const setStatusUser = (data: StatusUser) => ({ type: SET_STATUS_USER, payload: data });

const createUser = (data: UserData) => ({ type: CREATE_USER, payload: data });

export function asyncCreateUser(controlButton: (state: boolean) => void) {
  return async function (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
    controlButton(true);
    return Promise.resolve().then(() => {
      setTimeout(() => {
        const data = {
          message: 'string',
          token: `${Date.now()}`,
          refreshToken: 'string',
          userId: 'string',
          name: 'string',
        };
        dispatch(createUser(data));
        dispatch(setStatusUser({ name: data.name, isAuth: true }));
        controlButton(false);
      }, 1500);
    });
  };
}
