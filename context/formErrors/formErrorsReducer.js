import { SET_ERROR, CLEAN_ERROR, SET_ERROR_FORM } from "../types/jobTypes"

const formErrorsReducer = (state, action) => {
  switch (action.type) {
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

export default formErrorsReducer