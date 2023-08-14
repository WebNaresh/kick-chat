import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AiOutlineSearch } from "react-icons/ai";
import ContactComp from "./contact-comp";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      {" "}
      {/* Use flex flex-col */}
      <div className="h-[70px] relative">
        <div className="absolute w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-2 place-items-center grid py-4">
              <AiOutlineSearch className="text-xl text-primary" />
            </div>
            <div className=" col-span-10 my-4 place-items-center">
              <Input className="rounded-full bg-slate-900 w-[90%]" />
            </div>
          </div>
          <Separator />
        </div>
      </div>
      <div className=" overflow-y-scroll h-[70vh]">
        {" "}
        {/* Add overflow-y-auto here */}
        <ContactComp />
        <ContactComp />
        <ContactComp />
        <ContactComp />
        <ContactComp />
        <ContactComp />
        <ContactComp />
        <ContactComp />
        <ContactComp />
      </div>
    </div>
  );
};

export default Contacts;
