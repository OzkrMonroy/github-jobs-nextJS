import axios from 'axios';
import { SAVE_RESULTS, SET_ERROR } from "../context/types/jobTypes";

const useGetJobsFromApi = (dispatch) => {

  const getDataFromApi = async (description = "JavaScript", location = "New York") => {
    const locationToUse = location !== "" ? location : "New York";
    try {
      console.log("Me estoy ejecutando, hijo te tu puta madre. Arreglalo mierda!!!");
      const axiosData = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&full_time=true&location=${locationToUse}`);
      const data = axiosData.data
      
      dispatch({
        type: SAVE_RESULTS,
        payload: data
      })
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_ERROR,
        payload: "An error occurred"
      })
    }
  }

  return { getDataFromApi }
}

export default useGetJobsFromApi