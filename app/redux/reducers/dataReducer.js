import { actions } from '../actions';
const initialState = {
  loggedIn: false,
  user: null,
  error: null,
  loading: true
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        loading: false
      };
    default:
      return state;
  }
}