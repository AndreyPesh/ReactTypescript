import { SET_STATUS_USER } from "../constants";

const defaultState = {
  name: 'Guest',
  isAuth: false
} 

export interface StatusUser {
  name: string,
  isAuth: boolean
}

type TypeStatusUser = {
  type: typeof SET_STATUS_USER,
  payload: StatusUser
}

export default function statusUserReducer(state = defaultState, action: TypeStatusUser) {
  switch(action.type) {
    case SET_STATUS_USER: return {...state, ...action.payload}
    default: return state;
  }
}
