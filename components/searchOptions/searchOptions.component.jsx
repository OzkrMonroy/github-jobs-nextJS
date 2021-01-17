import { useContext } from "react";
import JobContext from "../../context/jobs/jobContext";
import CheckBox from "../checkbox/checkbox.component";
import RadioButton from "../radioButtons/radioButton.component";

const SearchOptions = () => {
	const jobContext = useContext(JobContext);
	const { setLocationName, location, locationsByDefault } = jobContext;

	const handleLocationChange = (e) => {
		let locationName = e.target.value;
		setLocationName(locationName.trim());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			className="w-full md:w-40p lg:w-35p flex flex-col items-center justify-items-start"
			onSubmit={handleSubmit}
		>
			<CheckBox
				label="Full time"
				name="fullTimeOption"
				id="fullTimeOption"
				marginBottom="10"
				checked={true}
				isDisabled={true}
			/>
			<div className="w-full">
				<h2 className="text-font-placeholder font-bold text-base uppercase text-left mb-4">
					Location
				</h2>
				<div className="flex items-center bg-white w-full p-3 mb-8 shadow">
					<div className="bg-world-img w-10p h-4 bg-no-repeat bg-center"></div>
					<input
						type="text"
						className="text-font-placeholder focus:outline-none focus:border-transparent truncate w-90p block p-2"
						placeholder="City, state, zip code or country"
						value={location}
						onChange={handleLocationChange}
					/>
				</div>
				{locationsByDefault.map((city, index) => (
					<RadioButton
						key={index}
						label={city}
						id={city}
						marginBottom={4}
					/>
				))}
			</div>
		</form>
	);
};

export default SearchOptions;
