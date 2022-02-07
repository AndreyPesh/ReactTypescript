import { TypeActionCreateUser, userData } from '../actions/usersCreator';
import { CREATE_USER } from '../constants';


const defaultStateUserData: userData = {
  message: '',
  token: '',
  refreshToken: '',
  userId: '',
  name: ''
}

export default function usersReducer(state = defaultStateUserData, action: TypeActionCreateUser) {
  switch(action.type) {
    case CREATE_USER: return {...state, ...action.payload}
    default: return state;
  }
}