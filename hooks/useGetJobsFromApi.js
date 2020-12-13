import axios from 'axios';
import { SAVE_RESULTS } from "../context/types/jobTypes";

const useGetJobsFromApi = (dispatch) => {

  const getDataFromApi = async (description = "JavaScript", location = "New York") => {
    const locationToUse = location !== "" ? location : "New York";
    try {
      const axiosData = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=true&location=${locationToUse}`);
      const data = axiosData.data
      
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