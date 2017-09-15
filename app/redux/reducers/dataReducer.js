import { types } from '../actions';
const initialState = {
  loggedIn: false,
  sync: false,
  loading: true,
  user: null,
  remoteData: null,
  error: null
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loading: false
      };
    case types.SHOW_LOADING:
      return {
        ...state,        
        loading: true
      };
    case types.HIDE_LOADING:
      return {
        ...state,        
        loading: false
      };
    case types.LOAD_FROM_API:
      return {
        ...state,        
        sync: true,
        remoteData: action.payload
      };
    default:
      return state;
  }
}