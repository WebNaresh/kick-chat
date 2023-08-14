import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  console.log("page");
  console.log("page");

  return (
    <>
      <div className="flex w-full justify-center items-center h-screen">
        <div className="w-[40%] flex  justify-center">
          <Button className="rounded-full bg-green-400 px-14 py-6 text-md ">
            Scan
          </Button>
        </div>

        <Image
          src="/scanner.png"
          alt="image scan"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[60%] h-full hidden md:block"
        />
      </div>
    </>
  );
};

export default page;
