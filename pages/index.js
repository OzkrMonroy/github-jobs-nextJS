import { useContext, useEffect } from "react";
import Layout from "../components/layout/layout.component";
import MainContent from "../components/mainContent/mainContent.component";
import SearchJobs from "../components/searchJobs/searchJobs.component";
import JobContext from "../context/jobContext";

export default function Home() {
	const jobContext = useContext(JobContext);
	const { getJobsByDefault, jobsResult } = jobContext;

	useEffect(() => {
		if(jobsResult.length < 1){
			getJobsByDefault()
		}
	}, [])
	
	return (
		<Layout>
      <SearchJobs/>
			<MainContent/>
    </Layout>
	);
}
