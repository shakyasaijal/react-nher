import axios from "axios";
import { LANDING_PAGE } from "../constants";

export const loadLandingPage = () => async dispatch => {
  try {
    const url = `/api/v1/users/load`;
    const load = await axios.get(url);
    const payload = load.data;
    console.log(load);
    const datas = { type: LANDING_PAGE, payload };
    dispatch(datas);
  } catch (err) {
    console.log(err);
  }
};
