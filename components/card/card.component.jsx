const Card = () => {
	return (
		<div className="flex items-start sm:items-center justify-between bg-white rounded p-2 pr-3 w-full mb-6 shadow">
			<div className="w-25p">
				<img src="/kasisto.png" alt="" className="w-95p mx-auto" />
			</div>
			<div className="flex flex-col w-70p">
				<h2 className="text-font-second font-bold text-xs mb-3">Kasisto</h2>
				<p className="text-font-second font-normal text-base mb-3">
					Front-End Software Engineer
				</p>
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-baseline lg:flex-row lg:items-center w-full mb-4">
					<div className="w-20p mb-4 sm:mb-0 md:mb-4 lg:mb-0">
						<span className="text-font-second font-bold text-xs border border-secondary text-center rounded w-16 p-1">
							Full time
						</span>
					</div>
					<div className="flex items-center w-full sm:w-80p md:w-full lg:w-80p lg:justify-end">
						<div className="flex items-center w-48p mr-3 lg:w-35p lg:mr-0 sm:justify-end md:justify-start lg:justify-end">
							<div className="bg-world-img w-5 h-5 bg-no-repeat bg-center mr-1"></div>
							<p className="text-font-placeholder truncate text-xs font-medium">New York</p>
						</div>
						<div className="flex items-center w-48p lg:w-35p sm:justify-end md:justify-start lg:justify-end">
							<div className="bg-time-img w-5 h-5 bg-no-repeat bg-center mr-1"></div>
							<p className="text-font-placeholder truncate text-xs font-medium">5 days ago</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
