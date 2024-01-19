import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

// const getData = async (userId: number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

type PostUserProps = {
  userId: number;
};

const PostUser = async ({ userId }: PostUserProps) => {
    const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user?.name}</span>
    </div>
  );
};

export default PostUser;
