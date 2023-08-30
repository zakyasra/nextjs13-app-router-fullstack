"use client";

import { links } from "@/data/links.data";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkMode/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        xwazzax
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          );
        })}
        {session.status == "authenticated" ? (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
