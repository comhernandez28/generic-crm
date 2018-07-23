import { SET_CURRENT_USER } from "../actions/actions";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        //if there is something = !(false) = true
        //if there is emptiness = !(true) = false
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
