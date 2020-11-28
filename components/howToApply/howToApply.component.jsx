import Link from "next/link";
import styles from './howToApply.module.css';

const HowToApply = () => {
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
			{/* Show "how-to-aply" data here */}
			<div className={`${styles["how-to-apply"]}`}>
				<p>Please email a copy of your resume and online portfolio to <a href="/">wes@kasisto.com</a>& CC <a href="/">eric@kasisto.com</a> </p>
			</div>
		</div>
	);
};

export default HowToApply;
