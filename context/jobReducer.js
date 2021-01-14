import { SAVE_RESULTS, SET_ERROR, SET_LOADING, SET_LOCATION_NAME, SET_SELECTED_JOB, CLEAN_ERROR, SET_ERROR_FORM } from "./types/jobTypes"

const jobReducer = (state, action) => {
  switch (action.type) {
    case SAVE_RESULTS:
      return {
        ...state,
        jobsResult: action.payload,
        loading: false,
        error: false
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case SET_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload
      }
    case SET_ERROR_FORM:
      return {
        ...state,
        errorForm: true,
        errorMessage: action.payload
      }
    case CLEAN_ERROR:
      return {
        ...state,
        errorForm: false,
        errorMessage: ""
      }
    default:
      return state
  }
}

export default jobReducer