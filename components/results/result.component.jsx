import { useContext, useMemo } from 'react';
import JobContext from '../../context/jobs/jobContext';
import Card from '../card/card.component'
import NoResults from '../noResults/noResults.component';
import Spinner from '../spinner/spinner.component';

const Results = () => {
  const jobContext = useContext(JobContext);
  const { jobsResult, loading } = jobContext;

  return useMemo(() => {
    return loading ? <Spinner/> : (
      <div className="flex flex-col items-center w-full md:w-55p lg:w-60p">
        {jobsResult.length < 1 ? 
          <NoResults/>
        : jobsResult.map(job => (
          <Card key={job.id} jobInformation={job}/>
        ))}
      </div>
    );
  }, [jobsResult, loading])
}
 
export default Results;