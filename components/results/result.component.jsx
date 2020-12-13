import { useContext, useMemo } from 'react';
import JobContext from '../../context/jobContext';
import Card from '../card/card.component'
import Spinner from '../spinner/spinner.component';

const Results = () => {
  const jobContext = useContext(JobContext);
  const { jobsResult, loading } = jobContext;

  return useMemo(() => {
    return loading ? <Spinner/> : (
      <div className="flex flex-col items-center w-full md:w-55p lg:w-60p">
        {jobsResult.length < 1 ? 
          <p>No results</p>
        : jobsResult.map(job => (
          <Card key={job.id} jobInformation={job}/>
        ))}
      </div>
    );
  }, [jobsResult])
}
 
export default Results;