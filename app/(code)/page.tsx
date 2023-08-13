import type { NextPage } from "next";
import Image from "next/image";

const HomeComponent: NextPage = () => {
  return (
    <>
      <Image
        alt="Hero Image"
        src={"/bg-12.jpg"}
        width={1200}
        height={500}
      ></Image>
    </>
  );
};

export default HomeComponent;
