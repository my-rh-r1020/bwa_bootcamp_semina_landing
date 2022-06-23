import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();
  // Set Timeout to Reload Previous Page Before Not Found Page
  useEffect(() => {
    setTimeout(() => {
      // Auto Redirect
      router.back();
    }, 2000);
  });

  return (
    <div>
      <h1 className="title-error">NotFoundPage</h1>
    </div>
  );
}
