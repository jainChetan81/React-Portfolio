import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { FC, useState } from "react";

const Contact: FC = () => {
	const [isValid, setIsValid] = useState(false);
	const handleSubmit = () => {};
	return (
		<section className={styles.contact} id="contact">
			<header>
				<h2 className="capitalize">contact me</h2>
				<p>If you have seen my potential or want to talk to me, do not hesitate to send me a message.</p>
			</header>
			<div className={styles.contacts}>
				<div className={styles.contact_info}>
					<Image
						src="https://ik.imagekit.io/clhowstalgz/icons/email-icon.svg"
						alt="Email"
						width={40}
						height={40}
					/>
					<a href="jain.cj.chetan@gmail.com">jain.cj.chetan@gmail.com</a>
				</div>
				<div className={styles.contact_info}>
					<Image
						src="https://ik.imagekit.io/clhowstalgz/icons/phone-icon.svg"
						alt="Phone"
						width={40}
						height={40}
					/>
					<a href="tel:+5531981213843">(+91) 87007-76723</a>
				</div>
			</div>
			<div className={styles.form}>
				<h2>Get in touch using the form below</h2>
				<form onSubmit={handleSubmit}>
					<input placeholder="Email" id="email" type="email" name="email" />
					<textarea placeholder="Leave your Message" id="message" name="message" />
					<button type="submit" disabled={!isValid}>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};
export default Contact;
