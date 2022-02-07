import { DEFAULT_STATUS_USER, SET_STATUS_USER } from '../constants';
import { TypeStatusUser } from '../types/types';

export default function statusUserReducer(state = DEFAULT_STATUS_USER, action: TypeStatusUser) {
  switch (action.type) {
    case SET_STATUS_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
