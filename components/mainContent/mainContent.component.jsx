const { default: SearchOptions } = require("../searchOptions/searchOptions.component")

const MainContent = () => {
  return (
    <div className="flex w-full">
      <SearchOptions/>
    </div>
  );
}
 
export default MainContent;