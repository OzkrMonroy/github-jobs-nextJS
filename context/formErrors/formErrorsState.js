import { useReducer } from "react"
import ErrorsContext from "./formErrorsContext";
import errorsReducer from './formErrorsReducer';
import { CLEAN_ERROR, SET_ERROR_FORM } from "../types/jobTypes";

const FormErrorsState = ({children}) => {
  const initialState = {
    errorForm: false,
    errorMessage: ""
  }

  const [state, dispatch] = useReducer(errorsReducer , initialState);

  const setErrorForm = message => {
    dispatch({
      type: SET_ERROR_FORM,
      payload: message
    })
    setTimeout(() => {
      dispatch({
        type: CLEAN_ERROR
      })
    }, 3000);
  }

  return (
    <ErrorsContext.Provider
      value={{
        errorForm: state.errorForm,
        errorMessage: state.errorMessage,
        setErrorForm
      }}
    >
      {children}
    </ErrorsContext.Provider>
  )
}

export default FormErrorsState