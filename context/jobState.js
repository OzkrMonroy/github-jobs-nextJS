import { useReducer } from "react"
import useGetJobsFromApi from "../hooks/useGetJobsFromApi";
import JobContext from "./jobContext";
import jobReducer from "./jobReducer"
import { SET_LOCATION_NAME, SET_SELECTED_JOB } from "./types/jobTypes";

const JobState = ({children}) => {
  const initialState = {
    jobsResult: [],
    jobSelected: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("jobSelected")) : null,
    location: ""
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

  const setSelectedJob = id => {
    const jobSelected = state.jobsResult.filter(job => job.id === id);

    const localJob = JSON.stringify(jobSelected[0])

    localStorage.setItem("jobSelected", localJob);
    dispatch({
      type: SET_SELECTED_JOB,
      payload: jobSelected[0]
    })
  }

  const setLocationName = locationName => {
    dispatch({
      type: SET_LOCATION_NAME,
      payload: locationName
    })
  }

  return (
    <JobContext.Provider value={{
      jobsResult: state.jobsResult,
      jobSelected: state.jobSelected,
      location: state.location,
      getJobsByDefault,
      setSelectedJob,
      searchJobsApi,
      setLocationName
    }}>
      {children}
    </JobContext.Provider>
  )
}

export default JobState