import { useContext } from 'react';
import JobContext from '../../context/jobContext';
import Card from '../card/card.component'

const Results = () => {
  //TODO: Optimize this (render)
  const jobContext = useContext(JobContext);
  const { jobsResult } = jobContext;
  return (
    <div className="flex flex-col items-center w-full md:w-55p lg:w-60p">
      {console.log(jobsResult)}
      {jobsResult.length < 1 ? 
        <p>No results</p>
      : jobsResult.map(job => (
        <Card key={job.id} jobInformation={job}/>
      ))}
    </div>
  );
}
 
export default Results;