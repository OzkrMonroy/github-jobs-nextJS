import styles from "./checkbox.module.css";

const CheckBox = ({ label, name, id, marginBottom, checked, isDisabled }) => {
  return (
    <div
				className={`flex items-center w-full mb-${marginBottom} relative ${styles.checkboxContainer}`}
			>
				<input
					type="checkbox"
					name={name}
					id={id}
					className={`border-gray-300 mr-4 h-5 w-5 bg-gray-100 invisible`}
					defaultChecked={checked}
					disabled={isDisabled}
				/>
				<label
					htmlFor={id}
					className="text-font-second font-medium cursor-pointer"
				>
					{label}
				</label>
			</div>
  );
}
 
export default CheckBox;