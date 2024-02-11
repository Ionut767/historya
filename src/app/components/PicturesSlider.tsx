"use client";
import React, { useEffect, useState } from "react";
import Ev from "./Ev";
import Image from "next/legacy/image";
import testimage from "@/media/LeonardoDaVinci.jpeg";
import testbg from "@/media/mainbg.jpg";

const textData = [
  {
    text: "Text 1 Description",
  },
  {
    text: "Text 2 Description",
  },
  {
    text: "Text 3 Description",
  },
  {
    text: "Text 4 Description",
  },
  {
    text: "Text 5 Description",
  },
  {
    text: "Text 6 Description",
  },
];

export default function PicturesSlider() {
  const initialIndex = Math.floor(textData.length / 2);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + textData.length) % textData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
  };

  return (
    <div className="relative flex items-center h-[80vh] sm:h-screen overflow-hidden">
      <div className="flex items-center ">
        <div
          className=" w-full jus flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / textData.length
            }%)`,
          }}
        >
          {textData.map((item, index) => (
            <div
              key={index}
              className={` w-screen sm:h-screen h-[80vh] flex items-center justify-center transition-transform duration-500 ease-in-out 
              ${index === currentIndex ? "transform scale-110" : "opacity-75"}
              ${index === currentIndex - 1 && "transform translate-x-[15%]"}
              ${index === currentIndex + 1 && "transform translate-x-[-15%]"}`}
            >
              <div className="text-white p-4 w-3/4 lg:h-3/4 h-2/4 bg-black relative overflow-hidden z-0">
                <Image
                  className=" -z-[1] opacity-50"
                  src={testbg}
                  alt={"Background"}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="flex flex-row items-center">
                  <div className="size-10 lg:size-20 mx-2 rounded-full border border-white">
                    <Image
                      className=" rounded-full"
                      src={testimage}
                      alt={"TestImage"}
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm text-white">
                      <Ev b i>
                        {item.text}
                      </Ev>
                    </p>
                    <p className="text-sm text-gray-300">
                      <Ev i sb>
                        1454 - 1494
                      </Ev>
                    </p>
                  </div>
                </div>
                <div className=" absolute bottom-1 lg:bottom-3 m-5 lg:m-10 w-auto lg:w-3/4 text-xl lg:text-4xl ">
                  <h3 style={{ fontFamily: "'Gilda Display', serif" }}>
                    <Ev up>museum of art, known as the big bang</Ev>
                  </h3>
                  <p className="text-sm text-gray-300">
                    <Ev i sb>
                      1470 - 1474
                    </Ev>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full absolute flex flex-row bottom-24 lg:bottom-10 right-0 items-center justify-around">
        <div className=" flex flex-row w-40">
          {textData.map((item, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={` hover:transform hover:scale-110 w-3 lg:w-7 h-[6px] bg-white cursor-pointer ${
                index === currentIndex
                  ? "opacity-100 animate-pulse"
                  : "opacity-15"
              }`}
            />
          ))}
        </div>
        <div className="text-gray-600  text-2xl ">
          <button className="hover:text-white" onClick={handlePrev}>
            {"<--"}
          </button>
          <button className=" m-1 hover:text-white" onClick={handleNext}>
            {"-->"}
          </button>
        </div>
      </div>
    </div>
  );
}
