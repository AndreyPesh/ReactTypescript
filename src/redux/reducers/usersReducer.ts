import { TypeActionCreateUser } from '../types/types';
import { CREATE_USER, DEFAULT_STATUS_USER_DATA } from '../constants';

export default function usersReducer(state = DEFAULT_STATUS_USER_DATA, action: TypeActionCreateUser) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
