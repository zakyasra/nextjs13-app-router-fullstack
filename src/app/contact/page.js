import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "xwazzax Contact",
  description: "Fullstack app NextJS = Contact",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep in Tuoch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} alt="" className={styles.img} />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className={styles.input}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            className={styles.input}
          />
          <textarea
            className={styles.textarea}
            placeholder="message"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
