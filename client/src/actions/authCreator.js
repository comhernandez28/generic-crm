import { GET_ERRORS, SET_CURRENT_USER } from "./actions";
import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";

//Register - Register User
export const registerUser = (userData, history) => dispatch => {
  async function submitUser() {
    try {
      const res = await axios.post("/api/users/register", userData);
      console.log(res);
      history.push("/login");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  }
  submitUser();
};

//Login - Get User Token
export const loginUser = userData => dispatch => {
  async function signToken() {
    try {
      const res = await axios.post("/api/users/login", userData);
      //Save to Local Storage
      const { token } = res.data;
      //Set Token to Local Storage
      localStorage.setItem("jwtToken", token);
      //Set token to Auth Header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set Current User
      dispatch(setCurrentUser(decoded));
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  }
  signToken();
};

//Set Logged in User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log user out
export const logoutUser = () => dispatch => {
  //remove token from LS
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests
  setAuthToken(false);
  //set current user to {} which will set isAuth to false
  dispatch(setCurrentUser({}));
};

// Promises Asynchronous Requests | 89% Support
/*axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
    */

//Async/Await Asynchronous Requests | 85% Support
/*async function submitUser() {
      try {
        const res = await axios.post("/api/users/register", newUser);
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
        this.setState({ errors: err.response.data });
      }
    }
  submitUser();
  */

/* 
//promise login user
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to Local Storage
      const { token } = res.data;
      //Set Token to Local Storage
      localStorage.setItem("jwtToken", token);
      //Set token to Auth Header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set Current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
*/

/* 
  //async loginUser
export const loginUser = userData => dispatch => {
  async function signToken() {
    try {
      const res = await axios.post("/api/users/login", userData);
      //Save to Local Storage
      const { token } = res.data;
      //Set Token to Local Storage
      localStorage.setItem("jwtToken", token);
      //Set token to Auth Header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set Current User
      dispatch(setCurrentUser(decoded));
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  }
  signToken();
};
*/
