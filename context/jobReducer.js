import { GET_DEFAULT_JOBS, SET_SELECTED_JOB } from "./types/jobTypes"

const jobReducer = (state, action) => {
  switch (action.type) {
    case GET_DEFAULT_JOBS:
      return {
        ...state,
        jobsResult: action.payload
      }
    case SET_SELECTED_JOB:
      return {
        ...state,
        jobSelected: action.payload
      }
    default:
      return state
  }
}

export default jobReducer