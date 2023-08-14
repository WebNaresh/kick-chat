import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BsThreeDots } from "react-icons/bs";

type Props = {};

const ContactComp = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-11 py-4 hover:bg-gray-900 cursor-pointer">
        <div className="grid col-span-2 place-items-center">
          <Avatar className="border-2 border-primary">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className=" col-span-7 grid place-items-start text-md text-gray-500">
          <div className="">Naresh Bhosale</div>
          <div className="text-sm">Active 8 minutes-ago</div>
        </div>
        <div className=" col-span-2 place-items-center grid">
          <BsThreeDots />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default ContactComp;
