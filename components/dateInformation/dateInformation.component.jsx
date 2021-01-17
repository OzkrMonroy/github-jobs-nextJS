import { formatDistanceToNow } from "date-fns";

const DateInformation = ({createAt}) => {
	return (
    <>
			<div className="bg-time-img w-5 h-5 bg-no-repeat bg-center mr-1"></div>
			<p className="text-font-placeholder truncate text-xs font-medium">
				{ formatDistanceToNow(new Date(createAt))} {" "} ago.
			</p>
		</>
	);
};

export default DateInformation;
