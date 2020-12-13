import styles from './spinner.module.css';

const Spinner = () => {
	return (
		<div className="flex flex-col items-center w-full md:w-55p lg:w-60p relative">
			<div className={`${styles["sk-chase"]}`}>
				<div className={`${styles["sk-chase-dot"]}`}></div>
				<div className={`${styles["sk-chase-dot"]}`}></div>
				<div className={`${styles["sk-chase-dot"]}`}></div>
				<div className={`${styles["sk-chase-dot"]}`}></div>
				<div className={`${styles["sk-chase-dot"]}`}></div>
				<div className={`${styles["sk-chase-dot"]}`}></div>
			</div>
		</div>
	);
};

export default Spinner;
