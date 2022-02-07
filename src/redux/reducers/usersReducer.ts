import { getCurrentUserState } from '../../utils/functions/localStorage';
import { TypeActionCreateUser } from '../types/types';
import { SET_DATA_USER } from '../constants';



export default function usersReducer(state = getCurrentUserState(), action: TypeActionCreateUser) {
  switch (action.type) {
    case SET_DATA_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
