import { SAVE_RESULTS } from "../context/types/jobTypes";

const useGetJobsFromApi = (dispatch) => {

  const getDataFromApi = async (description = "JavaScript", location = "New York") => {
    const locationToUse = location !== "" ? location : "New York";
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=true&location=${locationToUse}`);
      const data = await response.json();
      
      dispatch({
        type: SAVE_RESULTS,
        payload: data
      })
    } catch (error) {
      console.error(error);
    }
  }

  return { getDataFromApi }
}

export default useGetJobsFromApi