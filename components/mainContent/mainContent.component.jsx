import { useContext } from "react";
import JobContext from "../../context/jobContext";
import Error from "../error/error.component";
import Results from "../results/result.component";
import SearchOptions from "../searchOptions/searchOptions.component";

const MainContent = () => {
  const jobContext = useContext(JobContext);
  const { error } = jobContext

  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <SearchOptions/>
      {error ? <Error/> : <Results/>}
    </div>
  );
}
 
export default MainContent;