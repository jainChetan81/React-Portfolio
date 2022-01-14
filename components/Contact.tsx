import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { FormEvent, MutableRefObject, useRef } from "react";
import type { FC } from "react";
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
			<div className={styles.contacts}>
				<div className={styles.contact_info}>
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/email-icon.svg?tr=w-40,h-40`}
						alt="Email"
						width={40}
						height={40}
					/>
					<a href="jain.cj.chetan@gmail.com">jain.cj.chetan@gmail.com</a>
				</div>
				<div className={styles.contact_info}>
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/phone-icon.svg?tr=w-40,h-40`}
						alt="Phone"
						width={40}
						height={40}
					/>
					<a href="tel:+5531981213843">(+91) 87007-76723</a>
				</div>
			</div>
			<p>If you have seen my potential or want to talk to me, do not hesitate to send me a message.</p>
			<div className={styles.form}>
				<h2>Get in touch using the form below</h2>
				<form ref={form} onSubmit={handleSubmit}>
					<input
						id="name"
						name="from_name"
						placeholder="John Doe"
						type="text"
						autoComplete="name"
						required
						role="text"
						arial-label="Enter your Name"
					/>
					<input
						id="subject"
						name="subject"
						placeholder="Subject"
						type="text"
						required
						role="text"
						arial-label="Enter your Subject for this Mail"
					/>
					<input placeholder="Email" id="email" type="email" name="email" autoComplete="email" required />
					<textarea
						placeholder="Leave your Message"
						id="message"
						name="message"
						rows={3}
						minLength={50}
						maxLength={100}
						spellCheck="true"
						role="textarea"
						arial-label="Enter your Message for this Mail"
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
};
export default Contact;
