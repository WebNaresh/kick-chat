"use client";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {};

const Client = (props: Props) => {
  let [sliderRef, setSliderRef] = useState(1);
  const autoSlideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleSlideClick = useCallback(
    (slideId: string, where?: string) => {
      if (where === "left" || where === "right") {
        const newSliderRef =
          where === "left"
            ? sliderRef === 1
              ? 3
              : sliderRef - 1
            : sliderRef === 3
            ? 1
            : sliderRef + 1;

        const slide = document.getElementById(`slide-${newSliderRef}`);
        if (slide) {
          slide.scrollIntoView({ behavior: "smooth" });
        }
        setSliderRef(newSliderRef);
      } else {
        sliderRef = sliderRef + 1;
        if (sliderRef + 1 > 3) {
          sliderRef = 1;
        }

        const slide = document.getElementById(slideId);
        slide?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [sliderRef]
  );

  const startAutoSlide = useCallback(() => {
    autoSlideInterval.current = setInterval(() => {
      handleSlideClick(`slide-${sliderRef + 1}`);
    }, 5000); // Change slide every 5 seconds
  }, [handleSlideClick, sliderRef]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideInterval.current !== null) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide, stopAutoSlide]);

  return (
    <div className="flex justify-center mt-4 ">
      <div className="absolute bottom-4">
        {[1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(`slide-${index}`)}
            className={`w-2 h-2 mx-1 bg-white rounded-full ${
              index === sliderRef
                ? "opacity-100"
                : "opacity-75 hover:opacity-100"
            } transition-opacity duration-250`}
          ></button>
        ))}
      </div>
      <div className="">
        <Button
          variant={"ghost"}
          onClick={() => handleSlideClick(`slide-${sliderRef}`, "left")}
          className="w-8 h-8 mr-2  rounded-full opacity-75 hover:opacity-100 transition-opacity duration-250 absolute top-1/2 left-0"
        >
          &lt;
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => handleSlideClick(`slide-${sliderRef}`, "right")}
          className="w-8 h-8 ml-2  rounded-full opacity-75 hover:opacity-100 transition-opacity duration-250 absolute top-1/2 right-0"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Client;
