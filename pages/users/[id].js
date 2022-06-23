import React from "react";
import { useRouter } from "next/router";

export default function editUser() {
  const router = useRouter();
  //   console.log(router);
  return <div>editUser {router.query.id}</div>;
}
