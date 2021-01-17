import FormErrorsState from '../context/formErrors/FormErrorsState';
import JobState from '../context/jobs/jobState';
import '../styles/styles.css'
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <JobState>
      <FormErrorsState>
        <Component {...pageProps} />
      </FormErrorsState>
    </JobState>
  )
}

export default MyApp