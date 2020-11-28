import Layout from "../components/layout/layout.component";
import MainContent from "../components/mainContent/mainContent.component";
import SearchJobs from "../components/searchJobs/searchJobs.component";

export default function Home() {
	return (
		<Layout>
      <SearchJobs/>
			<MainContent/>
    </Layout>
	);
}
