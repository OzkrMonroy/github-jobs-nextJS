import { useContext } from "react";
import JobContext from "../../context/jobs/jobContext";
import CompanyInformation from "../companyInformation/companyInformation.component";
import DateInformation from "../dateInformation/dateInformation.component";
import FullTimeIndicator from "../fullTime/fullTimeIndicator.component";
import styles from "./jobInformation.module.css";

const JobInformation = () => {
	const jobContext = useContext(JobContext)
	const { jobSelected: { title, type, description, created_at } } = jobContext;
	const isFullTime = type === "Full Time" ? true : false;

	return (
		<div className="w-full md:w-60p lg:w-70p flex flex-col">
			<div className="flex flex-col lg:flex-row lg:items-center mb-4">
				<h1 className="text-font-second font-bold text-2xl inline-block mb-2 lg:mb-0 mr-4">
					{title}
				</h1>
				{isFullTime && <FullTimeIndicator />}
			</div>
			<div className="flex mb-8">
				<DateInformation createAt={created_at}/>
			</div>
			<div className="mb-8">
				<CompanyInformation />
			</div>
			<div className={styles["job-description"]} dangerouslySetInnerHTML={{__html: description}}></div>
		</div>
	);
};

export default JobInformation;
