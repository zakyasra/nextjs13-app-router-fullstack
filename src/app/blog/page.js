import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

// server side
async function getData() {
  const res = await fetch("http://localhost:3001/api/post", {
    // next: { revalidate: 3600 }, // revalidate at most every hour
    // cache: 'force-cache' // if data changing all the time
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// add async
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data?.map((d, idx) => (
        <Link className={styles.container} href={`/blog/${d?._id}`} key={d?._id}>
          <div className={styles.imgContainer}>
            <Image
              width={400}
              height={250}
              src={d?.img}
              className={styles.img}
            />
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              <h1 className={styles.title}>{d?.title}</h1>
              <p className={styles.desc}>{d?.desc}</p>
              {/* <Button text="See More" url={"#"} /> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
