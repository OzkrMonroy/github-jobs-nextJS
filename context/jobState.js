import { useReducer } from "react"
import useGetJobsFromApi from "../hooks/useGetJobsFromApi";
import JobContext from "./jobContext";
import jobReducer from "./jobReducer"
import { CLEAN_ERROR, SET_ERROR_FORM, SET_LOADING, SET_LOCATION_NAME, SET_SELECTED_JOB } from "./types/jobTypes";

const JobState = ({children}) => {
  const initialState = {
    jobsResult: [],
    jobSelected: null,
    location: "New York",
    locationsByDefault: ["London", "Amsterdam", "New York", "Berlin"],
    loading: true,
    error: false,
    errorForm: false,
    errorMessage: "",
    isFirstTime: true
  }

  const [state, dispatch] = useReducer(jobReducer, initialState);
  const { getDataFromApi } = useGetJobsFromApi(dispatch);

  const getJobsByDefault = async () => {
    try {
      await getDataFromApi()
    } catch (error) {
      console.log(error);
    }
  }

  const searchJobsApi = async (description, location) => {
    try {
      await getDataFromApi(description, location);
    } catch (error) {
      console.error(error);
    }
  }

  const setSelectedJob = jobSelected => {
    const localJob = JSON.stringify(jobSelected)

    localStorage.setItem("jobSelected", localJob);
    dispatch({
      type: SET_SELECTED_JOB,
      payload: jobSelected
    })
  }

  const setLocationName = locationName => {
    dispatch({
      type: SET_LOCATION_NAME,
      payload: locationName
    })
  }

  const setLoadingStatus = () => {
    dispatch({
      type: SET_LOADING
    })
  }

  const setErrorForm = message => {
    console.log(message);
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
    <JobContext.Provider value={{
      jobsResult: state.jobsResult,
      jobSelected: state.jobSelected,
      location: state.location,
      locationsByDefault: state.locationsByDefault,
      loading: state.loading,
      error: state.error,
      errorForm: state.errorForm,
      errorMessage: state.errorMessage,
      isFirstTime: state.isFirstTime,
      getJobsByDefault,
      setSelectedJob,
      searchJobsApi,
      setLocationName,
      setLoadingStatus,
      setErrorForm
    }}>
      {children}
    </JobContext.Provider>
  )
}

export default JobState