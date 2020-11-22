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
        <meta name="description" content="Get weather information from anywhere"/>
        <meta
          property="og:url"
          content="https://weather-app-ruddy.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Weather App"
        />
        <meta
          property="og:description"
          content="Get weather information from anywhere"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/producthunt-647c4.appspot.com/o/weatherScreenApp%2FLaptop.jpg?alt=media&token=99db63cb-aa36-49db-abdf-120ccea560c8"
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