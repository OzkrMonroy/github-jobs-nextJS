import { useContext } from "react";
import JobContext from "../../context/jobContext";
import styles from "./snackbar.module.css";

const SnackBar = () => {
	const jobContext = useContext(JobContext);
	const { errorForm, errorMessage } = jobContext;

	return (
		<div className={`w-90p md:w-50p lg:w-40p bg-gray-900 mx-auto fixed left-0 right-0 p-1 rounded z-10 ${styles.snackbar} ${errorForm ? styles["show-snackbar"] : styles["hide-snackbar"]}`}>
			<p className="text-white text-center">{errorMessage}</p>
		</div>
	);
};

export default SnackBar;
