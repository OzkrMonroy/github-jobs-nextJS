import { useReducer } from "react"
import JobContext from "./jobContext";
import jobReducer from "./jobReducer"
import { GET_DEFAULT_JOBS, SET_SELECTED_JOB } from "./types/jobTypes";

const JobState = ({children}) => {
  const initialState = {
    jobsResult: [],
    jobSelected: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("jobSelected")) : null
  }

  const [state, dispatch] = useReducer(jobReducer, initialState);

  const getJobsByDefault = async () => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=new+york');
      const data = await response.json();

      dispatch({
        type: GET_DEFAULT_JOBS,
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }

  const setSelectedJob = id => {
    const jobSelected = state.jobsResult.filter(job => job.id === id);

    const localJob = JSON.stringify(jobSelected[0])
    console.log(localJob)

    localStorage.setItem("jobSelected", localJob);
    dispatch({
      type: SET_SELECTED_JOB,
      payload: jobSelected[0]
    })
  }

  return (
    <JobContext.Provider value={{
      jobsResult: state.jobsResult,
      jobSelected: state.jobSelected,
      getJobsByDefault,
      setSelectedJob
    }}>
      {children}
    </JobContext.Provider>
  )
}

export default JobState