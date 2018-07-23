import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "./actions";
import axios from "axios";

//get profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  async function getProfile() {
    try {
      const res = await axios.get("/api/profile");
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
      console.log(res);
    } catch (err) {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    }
  }
  getProfile();
};

//set loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
