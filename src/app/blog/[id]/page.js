import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

// server side
async function getData(id) {
  const res = await fetch(`http://localhost:3001/api/post/${id}`, {
    // next: { revalidate: 3600 }, // revalidate at most every hour
    cache: "no-store", // if data changing all the time
  });

  if (!res.ok) {
    throw notFound(); // page not found from next/navigation
  }

  return res.json();
}

// dynamic generate meta data
export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.desc,
  };
}

// use async
const BlogDetail = async ({ params }) => {
  const data = await getData(params.id);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              width={40}
              height={40}
              src={data.img}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image fill src={data.img} className={styles.img} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
