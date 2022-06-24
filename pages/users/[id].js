import React from "react";
import { useRouter } from "next/router";

export default function editUser() {
  const router = useRouter();
  //   console.log(router);
  return <div>editUser {router.query.id}</div>;
}

// Fetching Data with getStaticPaths()
export async function getStaticPaths() {
  // Call external API
  const res = await fetch("https://jsonplaceholder.typicode.com/users"),
    users = await res.json();

  // Set the paths
  const paths = users.map((user) => ({
    params: { id: user.id },
  }));

  return { paths, fallback: false };
}
