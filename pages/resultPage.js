import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import HowToApply from "../components/howToApply/howToApply.component";
import JobInformation from "../components/jobInformation/jobInformation.component";
import Layout from "../components/layout/layout.component";
import Spinner from "../components/spinner/spinner.component";
import JobContext from "../context/jobs/jobContext";

const ResultPage = () => {
	const jobContext = useContext(JobContext);
	const route = useRouter();
	const { jobSelected, setSelectedJob } = jobContext;

	useEffect(() => {
		const localJobSelected = JSON.parse(localStorage.getItem("jobSelected"));
		if(localJobSelected){
			setSelectedJob(localJobSelected);
		}else {
			route.push("/");
		}
	}, [])

	return (
		<Layout>
			{jobSelected ? (
				<div className="flex flex-col md:flex-row md:justify-between">
					<HowToApply />
					<JobInformation />
				</div>
			) : (
				<div className="flex relative w-full justify-center">
					<Spinner/>
				</div>
			)}
		</Layout>
	);
};

export default ResultPage;
