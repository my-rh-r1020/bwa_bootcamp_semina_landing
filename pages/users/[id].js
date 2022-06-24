import React from "react";
// import { useRouter } from "next/router";

export default function editUser({ user }) {
  // const router = useRouter();
  //   console.log(router);
  return (
    <div>
      <h1>Edit Biodata User</h1>
      <ul>
        <li>
          Name : {user.name}
          <br />
          Username : {user.username}
          <br />
          Email : {user.email}
          <br />
          Address : {user.address.street}, {user.address.city}, {user.address.zipcode}
          <br />
          Phone : {user.phone}
        </li>
      </ul>
    </div>
  );
}

// Fetching Data with getStaticPaths()
export async function getStaticPaths() {
  // Call external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`),
    users = await res.json();

  // Set the paths
  const paths = users.map((user) => ({
    params: { id: `${user.id}` },
  }));

  return { paths, fallback: false };
}

// Fetching Data with getStaticProps()
export async function getStaticProps({ params }) {
  // params contains the post 'id'
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
    user = await res.json();

  console.log(user);

  // Pass post data via props
  return { props: { user } };
}
