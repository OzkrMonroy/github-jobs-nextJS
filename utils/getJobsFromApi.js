import axios from "axios";
import { SAVE_RESULTS, SET_ERROR } from "../context/types/jobTypes";

export const getDataFromApi = async (dispatch, description = "JavaScript", location = "New York") => {
	const locationToUse = location !== "" ? location : "New York";
	try {
		const axiosData = await axios.get(
			`https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?description=${description}&full_time=true&location=${locationToUse}`
		);
		const data = axiosData.data;

		dispatch({
			type: SAVE_RESULTS,
			payload: data,
		});
	} catch (error) {
		console.error(error);
		dispatch({
			type: SET_ERROR,
			payload: "An error occurred",
		});
	}
};
