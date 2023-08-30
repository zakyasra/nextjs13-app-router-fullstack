import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/websites.jpg"
          fill={true}
          alt="about img"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, ut asperiores. Fuga, nam corrupti! Repellendus obcaecati
            eos nisi corrupti atque quasi modi repellat aut aliquid
            consequuntur. Autem maiores officia alias?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, ut asperiores. Fuga, nam corrupti! Repellendus obcaecati
            eos nisi corrupti atque quasi modi repellat aut aliquid
            consequuntur. Autem maiores officia alias?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, ut asperiores. Fuga, nam corrupti! Repellendus obcaecati
            eos nisi corrupti atque quasi modi repellat aut aliquid
            consequuntur. Autem maiores officia alias?
            <br />
            <br /> - Sayang ibu
            <br />
            <br /> - Sayang ibu
            <br />
            <br /> - Sayang ibu
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
