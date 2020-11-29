import JobState from '../context/jobState';
import '../styles/styles.css'
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <JobState>
      <Component {...pageProps} />
    </JobState>
  )
}

export default MyApp