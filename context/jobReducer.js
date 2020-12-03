import { SAVE_RESULTS, SET_LOCATION_NAME, SET_SELECTED_JOB } from "./types/jobTypes"

const jobReducer = (state, action) => {
  switch (action.type) {
    case SAVE_RESULTS:
      return {
        ...state,
        jobsResult: action.payload
      }
    case SET_SELECTED_JOB:
      return {
        ...state,
        jobSelected: action.payload
      }
    case SET_LOCATION_NAME:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state
  }
}

export default jobReducer