import LocationInformation from "../locationInformation/locationInformation.component"

const CompanyInformation = () => {
  return (
    <div className="flex items-center">
      <img src="/kasisto.png" alt="company log" className="w-25p mr-4"/>
      <div className="flex flex-col h-full justify-around">
        <h2 className="mb-0 sm:mb-6 md:mb-0 text-font-second font-bold">Kasisto</h2>
        <div className="flex items-center">
          <LocationInformation/>
        </div>
      </div>
    </div>
  );
}
 
export default CompanyInformation;