import { CREATE_USER, SET_STATUS_USER } from '../constants';
import { StatusUser, UserData } from './interfaces';

export type TypeActionCreateUser = { type: typeof CREATE_USER; payload: UserData };

export type TypeStatusUser = {
  type: typeof SET_STATUS_USER;
  payload: StatusUser;
};
