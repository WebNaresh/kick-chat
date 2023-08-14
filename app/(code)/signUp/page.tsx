import Link from "next/link";
import React from "react";
import AuthForm from "../login/components/AuthForm";

const page = () => {
  return (
    <>
      <section className="flex h-[80vh]  flex-col items-center justify-center">
        <div
          id="container"
          className="py-4 mt-24pm px-10 sm:mx-auto sm:w-full sm:max-w-md  bg-[#FBFBFB] rounded-lg  shadow-md shadow-black/5 dark:bg-slate-900 dark:shadow-black/10 "
        >
          <AuthForm />
        </div>
      </section>
    </>
  );
};

export default page;
