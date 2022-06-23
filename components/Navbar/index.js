import React from "react";
// Libraries for SPA
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="users">Users</Link>
        </li>
      </ul>
    </div>
  );
}
