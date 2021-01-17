import { useReducer } from "react"
import { getDataFromApi } from "../../utils/getJobsFromApi";
import JobContext from "./jobContext";
import jobReducer from "./jobReducer"
import { SET_LOADING, SET_LOCATION_NAME, SET_SELECTED_JOB } from "../types/jobTypes";

const JobState = ({children}) => {
  const initialState = {
    jobsResult: [],
    jobSelected: null,
    location: "New York",
    locationsByDefault: ["London", "Amsterdam", "New York", "Berlin"],
    loading: true,
    error: false,
    isFirstTime: true
  }

  const [state, dispatch] = useReducer(jobReducer, initialState);

  const getJobsByDefault = async () => {
    try {
      await getDataFromApi(dispatch)
    } catch (error) {
      console.log(error);
    }
  }

  const searchJobsApi = async (description, location) => {
    try {
      await getDataFromApi(dispatch, description, location);
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

  return (
    <JobContext.Provider value={{
      jobsResult: state.jobsResult,
      jobSelected: state.jobSelected,
      location: state.location,
      locationsByDefault: state.locationsByDefault,
      loading: state.loading,
      error: state.error,
      isFirstTime: state.isFirstTime,
      getJobsByDefault,
      setSelectedJob,
      searchJobsApi,
      setLocationName,
      setLoadingStatus,
    }}>
      {children}
    </JobContext.Provider>
  )
}

export default JobState