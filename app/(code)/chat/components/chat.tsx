import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {} from "@radix-ui/react-icons";
import { BsEmojiSmile } from "react-icons/bs";
import { PiCaretCircleRightFill } from "react-icons/pi";
import LeftMessage from "./left-message";
import RightMessage from "./right-message";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col justify-between relative">
      <div className="h-[70px]">
        <div className="grid grid-cols-12 bg-gray-9050 border-gray-900 border-2 p-3 items-center absolute top-0">
          <div className=" col-span-1">
            <Avatar className=" m-auto">
              <AvatarImage
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                className="w-12 h-12 rounded-full "
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
          <div className=" col-span-9 text-primary">Naresh Mangesh Bhosale</div>
          <div className=" col-span-2 text-gray-600 text-sm truncate">
            Active 8 minutes ago
          </div>
        </div>
      </div>
      <div className=" h-[50vh] lg:h-[84vh] md:max-h-[84vh] max-h-[60vh] overflow-y-scroll py-2">
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
        <LeftMessage />
        <RightMessage />
      </div>
      <div className="grid grid-cols-12 bg-primary p-2">
        <div className="col-span-1 grid place-items-center">
          <BsEmojiSmile className="text-gray-950 text-xl" />
        </div>
        <div className="col-span-10">
          <Input
            placeholder="Reply..."
            color=""
            className=" outline-none border-none text-gray-950 placeholder:text-black focus-visible:ring-0"
          ></Input>
        </div>
        <div className="col-span-1 grid place-items-center">
          <PiCaretCircleRightFill className="text-gray-950 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
