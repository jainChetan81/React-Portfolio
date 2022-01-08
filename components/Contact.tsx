import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { FC, FormEvent, MutableRefObject, useRef } from "react";
import emailjs from "emailjs-com";

const Contact: FC = () => {
	const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.current) return;
		emailjs
			.sendForm(
				`${process.env.NEXT_PUBLIC_SERVICE_ID}`,
				`${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
				form.current,
				`${process.env.NEXT_PUBLIC_USER_ID}`
			)
			.then(
				(result) => {
					form.current?.reset();
					console.log(`result: `, result.text);
				},
				(error) => {
					console.error("error: ", error.text);
				}
			);
	};
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
				<form ref={form} onSubmit={handleSubmit}>
					<input id="name" name="from_name" placeholder="John Doe" type="text" autoComplete="name" required />
					<input id="subject" name="subject" placeholder="Subject" type="text" required />
					<input placeholder="Email" id="email" type="email" name="email" autoComplete="email" required />
					<textarea
						placeholder="Leave your Message"
						id="message"
						name="message"
						rows={3}
						minLength={50}
						maxLength={100}
						spellCheck="true"
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
};
export default Contact;
