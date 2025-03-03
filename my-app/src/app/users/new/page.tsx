"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className="btn" onClick={() => router.push("/users")}>
        Users Page
      </button>
      NewUserPage
    </div>
  );
};

export default NewUserPage;
