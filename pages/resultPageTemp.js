import HowToApply from '../components/howToApply/howToApply.component';
import JobInformation from '../components/jobInformation/jobInformation.component';
import Layout from '../components/layout/layout.component';

const ResultPageTemp = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:justify-between">
        <HowToApply/>
        <JobInformation/>
      </div>
    </Layout>
  );
}
 
export default ResultPageTemp;