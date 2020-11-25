import Results from "../results/result.component";
import SearchOptions from "../searchOptions/searchOptions.component";

const MainContent = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <SearchOptions/>
      <Results/>
    </div>
  );
}
 
export default MainContent;