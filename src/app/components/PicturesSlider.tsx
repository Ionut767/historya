"use client";
import React, { useState } from "react";
import Ev from "./Ev";
import Image from "next/legacy/image";
import { Author } from "../types";
export default function PicturesSlider({
  hasAvatar,
  typeOfBar,
  subText,
  sliderdata,
  loadingState,
}: {
  hasAvatar: boolean;
  typeOfBar: "nums" | "bar";
  subText?: string;
  sliderdata: Author[];
  loadingState: boolean;
}) {
  const initialIndex = Math.floor(sliderdata.length / 2);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderdata.length) % sliderdata.length
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderdata.length);
  };
  return (
    <div className="relative flex items-center h-[80vh] sm:h-screen overflow-hidden">
      <div className="flex items-center ">
        <div
          className=" w-full jus flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / sliderdata.length
            }%)`,
          }}
        >
          {loadingState
            ? [...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-screen sm:h-screen h-[80vh] flex items-center justify-center transition-transform duration-500 ease-in-out animate-pulse"
                >
                  <div className="text-white p-4 w-3/4 lg:h-3/4 h-2/4 bg-black relative overflow-hidden z-0">
                    <div className="absolute inset-0 bg-zinc-950 -z-[1]" />
                    {hasAvatar && (
                      <div className="absolute top-4 left-4 flex items-center">
                        <div className="w-16 h-16 bg-gray-700 rounded-full" />
                        <div className="ml-4">
                          <div className=" w-44 h-4 bg-gray-600 mb-2" />
                          <div className="w-32 h-4 bg-gray-600" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-16 left-14">
                      <div className=" w-44 h-6 bg-gray-600 mb-2" />
                      {subText && (
                        <div className="w-w-40 h-4 bg-gray-600 mb-2" />
                      )}
                      <div className="w-32 h-4 bg-gray-600" />
                    </div>
                  </div>
                </div>
              ))
            : sliderdata.map((item, index) => (
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
                      src={
                        hasAvatar && item.arts.length > 0
                          ? "https://lh3.googleusercontent.com/d/" +
                            item.arts[0].image
                          : (("https://lh3.googleusercontent.com/d/" +
                              item.image) as string)
                      }
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.src = "";
                      }}
                      layout="fill"
                      objectFit="cover"
                    />
                    {hasAvatar && (
                      <div className="flex flex-row items-center">
                        <div className="size-10 lg:size-20 mx-2 rounded-full border border-white">
                          <Image
                            className=" rounded-full"
                            src={
                              ("https://lh3.googleusercontent.com/d/" +
                                item.avatar) as string
                            }
                            alt={"TestImage"}
                            objectFit="cover"
                            width={78}
                            height={76}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-white">
                            <Ev b i>
                              {item.name}
                            </Ev>
                          </p>
                          <p className="text-sm text-gray-300">
                            <Ev i sb>
                              {item.birthdate}
                            </Ev>
                          </p>
                        </div>
                      </div>
                    )}
                    <div className=" absolute bottom-1 lg:bottom-3 m-5 lg:m-10 w-auto lg:w-3/4 text-xl lg:text-4xl ">
                      <h3 style={{ fontFamily: "'Gilda Display', serif" }}>
                        <Ev up>
                          {hasAvatar && item.arts.length > 0
                            ? item.arts[0].name
                            : item.name}
                        </Ev>
                      </h3>
                      {subText && <p className="text-sm">{subText}</p>}
                      <p className="text-sm text-gray-300">
                        {hasAvatar && item.arts.length > 0 ? (
                          <Ev i sb>
                            {item.arts[0].age}
                          </Ev>
                        ) : (
                          <Ev i sb>
                            {parseInt(
                              item.birthdate.split(" ")?.pop() ??
                                "Nespecificat",
                              10
                            )}{" "}
                            -
                            {parseInt(
                              item.birthdate.split(" ")?.pop() ??
                                "Nespecificat",
                              10
                            ) + item.age}
                          </Ev>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          {/* End of images */}
        </div>
      </div>
      <div className=" w-full absolute flex flex-row bottom-24 lg:bottom-10 right-0 items-center justify-around">
        <div className=" flex flex-row w-40">
          {typeOfBar === "nums" && (
            <Ev sb i>
              {currentIndex + 1} din {sliderdata.length}
            </Ev>
          )}
          {typeOfBar === "bar" &&
            sliderdata.map((_, index) => (
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
