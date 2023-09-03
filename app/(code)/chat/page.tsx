"use client";
import dynamic from "next/dynamic";
import Chat from "./components/chat";
import Contacts from "./components/contact";

const Scan = dynamic(() => import("./components/scan"), {
  ssr: false, // Disable server-side rendering for this component
});

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex w-full h-full">
      <section className="grid grid-cols-12 flex-grow">
        <div className="md:col-span-4 lg:col-span-4 col-span-12 border-r-2 dark:border-gray-900 border-gray-300">
          <Contacts />
        </div>
        <div className="col-span-8 hidden lg:block md:block">
          {0 ? <Chat /> : <Scan />}
        </div>
      </section>
    </div>
  );
};

export default Page;
