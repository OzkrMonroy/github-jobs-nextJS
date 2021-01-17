import Link from "next/link";
import { useContext } from "react";
import JobContext from "../../context/jobs/jobContext";
import styles from './howToApply.module.css';

const HowToApply = () => {
	const jobContext = useContext(JobContext);
	const { jobSelected: { how_to_apply } } = jobContext;

	return (
		<div className="w-full md:w-40p lg:w-30p flex flex-col mb-4">
			<Link href="/">
				<a>
					<div className="flex items-center mb-8">
						<img src="/arrow.svg" alt="back home" className="w-6 mr-2" />
						<p className="text-font-primary font-medium">Back to search</p>
					</div>
				</a>
			</Link>
			<h2 className="text-font-placeholder uppercase font-bold text-base mb-4">How to apply</h2>
			<div className={`${styles["how-to-apply"]} w-90p mr-auto ml-0`} dangerouslySetInnerHTML={{__html: how_to_apply}}></div>
		</div>
	);
};

export default HowToApply;
