import { useReducer } from "react"
import JobContext from "./jobContext";
import jobReducer from "./jobReducer"

const JobState = ({children}) => {
  const initialState = {
    jobsResult: []
  }

  const [state, dispatch] = useReducer(jobReducer, initialState);

  const getJobsByDefault = async () => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=new+york');
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <JobContext.Provider value={{
      jobsResult: state.jobsResult,
      getJobsByDefault
    }}>
      {children}
    </JobContext.Provider>
  )
}

export default JobState