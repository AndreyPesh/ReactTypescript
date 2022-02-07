import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { setLocalStorage } from '../../utils/functions/localStorage';
import { ValuesAuth, ValuesRegistration } from '../../utils/interfaces/interfaces';
import { BASE_HEADERS, BASE_URL, SET_DATA_USER, STATUS_200 } from '../constants';
import { UserData } from '../types/interfaces';

export const setDataUser = (data: UserData) => ({ type: SET_DATA_USER, payload: data });

export function asyncCreateUser(controlButton: (state: boolean) => void, values: ValuesRegistration) {
  return async function (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
    controlButton(true);
    try{
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/users`, 
        data: values,
        headers:  BASE_HEADERS
      });
      console.log(response);
      if (response.status === STATUS_200) {
        dispatch(asyncSignInUser({email: values.email, password: values.password}));
      }
    } catch {
      console.error('Can\'t create user');
    } finally{
      controlButton(false);
    }
  };
}

export function asyncSignInUser(values: ValuesAuth, controlButton?: (state: boolean) => void) {
  return async function (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) {
    controlButton && controlButton(true);
    try{
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/signin`, 
        data: values,
        headers:  BASE_HEADERS
      });
      console.log('sign ', response);
      if(response.status === STATUS_200) {
        dispatch(setDataUser(response.data));
        setLocalStorage(response.data);
      }
    } catch {
      console.error('Can\'t sign in');
    } finally{
      controlButton && controlButton(false);
    }
  };
}