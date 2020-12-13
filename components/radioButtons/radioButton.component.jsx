import { useContext } from "react";
import JobContext from "../../context/jobContext";
import styles from "./radioButton.module.css";

const RadioButton = ({ label, id, marginBottom }) => {
	const jobContext = useContext(JobContext);
	const { setLocationName } = jobContext;
	const checked = label === "New York" ? true : false;

	const handleOnChange = (e) => {
		setLocationName(e.target.value);
	};

	return (
		<div
			className={`flex items-center w-full mb-${marginBottom} relative ${styles.radioContainer}`}
		>
			<input
				type="radio"
				name="locationName"
				value={label}
				id={id}
				defaultChecked={checked}
				onChange={handleOnChange}
			/>
			<label
				htmlFor={id}
				className="text-font-second font-medium cursor-pointer"
			>
				{label}
			</label>
		</div>
	);
};

export default RadioButton;
