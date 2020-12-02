import { useContext } from "react";
import JobContext from "../../context/jobContext";
import LocationInformation from "../locationInformation/locationInformation.component"

const CompanyInformation = () => {
  const jobContext = useContext(JobContext);
  const { jobSelected: {company_logo, company, location} } = jobContext;

  return (
    <div className="flex items-center">
      <img src={company_logo} alt={company} className="w-25p mr-4"/>
      <div className="flex flex-col h-full justify-around">
        <h2 className="mb-0 sm:mb-6 md:mb-0 text-font-second font-bold">{company}</h2>
        <div className="flex items-center">
          <LocationInformation location={location}/>
        </div>
      </div>
    </div>
  );
}
 
export default CompanyInformation;