import { useState } from "react";

const SearchJobs = () => {
  const [jobSearch, setJobSearch] = useState("");
  
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log(jobSearch);
  }

	return (
		<div className="w-full bg-search-img bg-cover bg-no-repeat bg-center rounded-lg py-8">
			<form
        className="flex items-center bg-white p-2 w-95p md:w-90p lg:w-80p mx-auto rounded-sm"
        onSubmit={handleOnSubmit}
      >
				<div className="bg-work-img bg-no-repeat bg-center w-10p md:w-5p h-4"></div>
				<input
					type="text"
					className="text-font-placeholder focus:outline-none focus:border-transparent truncate w-55p md:w-80p block p-4"
          placeholder="Title, companies, expertise or benefits"
          value={jobSearch}
          onChange={e => setJobSearch(e.target.value)}
				/>
				<input
					type="submit"
					value="Search"
					className="bg-primary text-white block w-35p md:w-20p p-4 cursor-pointer rounded-md"
				/>
			</form>
		</div>
	);
};

export default SearchJobs;
