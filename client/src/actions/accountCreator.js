import {
  MOUNT_ACCOUNTS,
  ACCOUNT_LOADING,
  GET_ERRORS,
  GET_ACCOUNT
} from "./actions";
import axios from "axios";

//create account
export const createAccount = (accountData, history) => dispatch => {
  async function createAccount() {
    try {
      await axios.post("/api/accounts/create", accountData);
      history.push("/accounts");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  }
  createAccount();
};

//set loading
export const setAccountLoading = () => {
  return {
    type: ACCOUNT_LOADING
  };
};

//get accounts

export const getAccounts = () => dispatch => {
  async function getAccounts() {
    try {
      const res = await axios.get("/api/accounts/all");
      dispatch(setAccountLoading());
      dispatch({
        type: MOUNT_ACCOUNTS,
        payload: res
      });
    } catch (err) {
      console.log("right before error handle " + err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  }
  getAccounts();
};

//get account by id
export const getAccountById = id => dispatch => {
  async function getAccountById() {
    try {
      const res = await axios.get(`/api/accounts/${id}`);
      dispatch(setAccountLoading());
      dispatch({
        type: GET_ACCOUNT,
        payload: res
      });
    } catch (err) {
      console.log("right before error handle " + err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  }
  getAccountById();
};
