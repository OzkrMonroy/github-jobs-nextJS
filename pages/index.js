import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap"
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
			<h1>GitHub Jobs</h1>
		</>
	);
}
