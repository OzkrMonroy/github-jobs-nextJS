import { SAVE_RESULTS, SET_LOADING, SET_LOCATION_NAME, SET_SELECTED_JOB, SET_ERROR } from "../types/jobTypes";

const jobReducer = (state, action) => {
	switch (action.type) {
		case SAVE_RESULTS:
			return {
				...state,
				jobsResult: action.payload,
				loading: false,
				error: false,
				isFirstTime: false,
			};
		case SET_SELECTED_JOB:
			return {
				...state,
				jobSelected: action.payload,
			};
		case SET_LOCATION_NAME:
			return {
				...state,
				location: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case SET_ERROR:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};

export default jobReducer;
