import {
  ACCOUNT_LOADING,
  MOUNT_ACCOUNTS,
  GET_ACCOUNT
} from "../actions/actions";
import isEmpty from "../validation/is-empty";

const initialState = {
  currentAccount: {},
  accounts: [],
  tableLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOUNT_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload.data, //[...state.arr, action.payload],
        tableLoading: false
      };
    case GET_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload.data,
        tableLoading: false
      };
    case ACCOUNT_LOADING:
      return {
        ...state,
        tableLoading: true
      };
    default:
      return state;
  }
}
