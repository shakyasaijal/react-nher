import { LANDING_PAGE } from "../constants";

export default function(state = null, action) {
  switch (action.type) {
    case LANDING_PAGE:
      return action.payload || false;
    default:
      return state;
  }
}
