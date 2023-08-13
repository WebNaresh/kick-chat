"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
type Props = {};

const CarouselComp = (props: Props) => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      className="h-[50dvh]"
      autoPlay
      showArrows
      infiniteLoop
    >
      <div className="h-[50dvh]">
        <Image alt="next" fill src="/bg-12.jpg" className="" />
        <Button
          style={{ width: "fit-content", margin: "auto" }}
          className="legend"
        >
          Legend 1
        </Button>
      </div>
      <div className="h-[50dvh]">
        <Image fill alt="next" src="/Transparent.webp" />
        <Button
          style={{ width: "fit-content", margin: "auto" }}
          className="legend"
        >
          Legend 3
        </Button>
      </div>
    </Carousel>
  );
};

export default CarouselComp;
