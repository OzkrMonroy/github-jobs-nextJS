import { GET_DEFAULT_JOBS } from "./types/jobTypes"

const jobReducer = (state, action) => {
  switch (action.type) {
    case GET_DEFAULT_JOBS:
      return {
        ...state,
        jobsResult: action.payload
      }
    default:
      return state
  }
}

export default jobReducer