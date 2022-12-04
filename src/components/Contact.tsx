import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { FormEvent, MutableRefObject, useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [error, setError] = useState("");
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
        () => {
          form.current?.reset();
        },
        (error) => {
          setError(error.text);
        }
      );
  };
  return (
    <section className={styles.contact} id="contact">
      <header>
        <h2 className="capitalize inline-block sm:hidden">Contact Me</h2>
      </header>
      <div className={styles.contacts}>
        <div className={styles.contact_info}>
          <Image src="/images/email-icon.svg" alt="Email Information" width={40} height={40} />
          <a rel="nofollow" href="mailto:jain.cj.chetan@gmail.com">
            moc.liamg@natehc.jc.niaj
          </a>
        </div>
        <div className={styles.contact_info}>
          <Image src="/images/phone-icon.svg" alt="Phone Information" width={40} height={40} />
          <a rel="nofollow" href="tel:+8700776723">
            32767-70078 (19+)
          </a>
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
            arial-label="Enter your Name"
          />
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            type="text"
            required
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
            arial-label="Enter your Message for this Mail"
          />
          <button type="submit" aria-label="Submit the email form">
            Submit
          </button>
          <p className={styles.error}>{error}</p>
        </form>
      </div>
    </section>
  );
};
export default Contact;
