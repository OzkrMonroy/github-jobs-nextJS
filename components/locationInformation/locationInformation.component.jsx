const LocationInformation = ({ location }) => {
	return (
		<>
			<div className="bg-world-img w-5 h-5 bg-no-repeat bg-center mr-1"></div>
			<p className="text-font-placeholder truncate text-xs font-medium">
				{location}
			</p>
		</>
	);
};

export default LocationInformation;
