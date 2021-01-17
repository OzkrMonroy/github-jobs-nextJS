import { useContext, useEffect } from "react";
import Layout from "../components/layout/layout.component";
import MainContent from "../components/mainContent/mainContent.component";
import SearchJobs from "../components/searchJobs/searchJobs.component";
import SnackBar from "../components/snackBar/snackbar.component";
import JobContext from "../context/jobContext";

export default function Home() {
	const jobContext = useContext(JobContext);
	const { getJobsByDefault, isFirstTime } = jobContext;

	useEffect(() => {
		if(isFirstTime){
			getJobsByDefault()
		}
	}, [])
	
	return (
		<Layout>
      <SearchJobs/>
			<MainContent/>
			<SnackBar/>
    </Layout>
	);
}
