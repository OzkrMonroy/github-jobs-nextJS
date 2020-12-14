const Error = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-55p lg:w-60p">
      <div className="w-full bg-error-img bg-contain bg-no-repeat bg-center h-element-default mt-4 mb-4"></div>
      <p className="text-font-second font-medium text-center text-xl">An error has ocurred.</p>
    </div>
  );
}
 
export default Error;