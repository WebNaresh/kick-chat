import Link from "next/link";
import { PiScanBold } from "react-icons/pi";
import { Button } from "./ui/button";

const Floating = () => {
  return (
    <Link href={"/scan"}>
      <Button className="text-xl h-10 w-10 sticky bottom-0 flex-col m-4 right-0 left-[95%]">
        <PiScanBold className="text-lg" />
      </Button>
    </Link>
  );
};

export default Floating;
