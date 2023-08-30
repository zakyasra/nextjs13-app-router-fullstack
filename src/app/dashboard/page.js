"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/post?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    return router.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e?.target[0].value;
    const desc = e?.target[1].value;
    const img = e?.target[2].value;
    const content = e?.target[3].value;

    try {
      await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/post/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  // OLD
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const getData = async () => {
  //   setIsLoading(true);
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     cache: "force-cache",
  //   });

  //   if (!res.ok) {
  //     setErr(true);
  //   }

  //   const data = await res.json()
  //   setData(data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {data?.map((d) => (
          <div className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={d?.img} alt="img" width={200} height={100} />
            </div>
            <h2 className={styles.postTitle}>{d?.title}</h2>
            <span className={styles.delete} onClick={() => handleDelete(d._id)}>
              X
            </span>
          </div>
        ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Dashboard;
