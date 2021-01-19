import Head from "next/head";
import Header from "../header/header.component";

const Layout = ({ children }) => {
  return (
    <>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
					rel="stylesheet"
				/>
        <title>Jobs from Github Jobs API</title>
        <meta name="description" content="Get jobs information from Github Jobs API"/>
        <meta
          property="og:url"
          content="https://jobsfromgithubapi.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GitHub Jobs App"
        />
        <meta
          property="og:description"
          content="Get jobs information from Github Jobs API."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/onlineclassroomsolution.appspot.com/o/GitHubJobsApp.png?alt=media&token=b6df7201-2f1c-409d-8d0e-2ab7281251e1"
        />
        <link rel="icon" href="/favicon.ico" />
			</Head>
      <div className="bg-gray-100">
        <div className="w-full px-2 md:px-0 sm:w-90p md:w-85p lg:w-90p mx-auto">
          <Header/>
          <div>{children}</div>
        </div>
      </div>
		</>
  );
}
 
export default Layout;

// sm md lg xl