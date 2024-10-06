import React from "react";
import bannerImg from "../assets/banner.jpg"; // Assuming you have a banner image in assets
import centerImage from "../assets/heading.png"; // Replace with your actual image path
import e1 from "../assets/e1.png"; // Replace with your actual image path
import r from "../assets/r.png"; // Replace with your actual image path
import any from "../assets/any.png"; // Replace with your actual image path

import sit from "../assets/sit.png";
import fire from "../assets/fire.png";

const MainContent = () => {
  return (
    <main className="flex justify-center mt-[20px] py-2 lg:py-12">





      <div className="bg-red-800 w-[10000px h-[20px]  "></div>

      {/* <img
          src={r}
          alt="rainbow"
          className="absolute top-[570px] h-[290px] ml-[1630px] w-auto"
        />  */}

      <div className="bg-skyblue h-[730px] w-[500px] lg:w-[900px]  bottom-[30px] flex flex-col items-center rounded-t-lg justify-center relative">
        {/* Centered Image */}
        <img
          src={centerImage}
          alt="Center Heading"
          className="absolute top-[50px] h-[290px] w-auto"
        />

        <img
          src={e1}
          alt="png1"
          className="hidden lg:block lg:absolute lg:bottom-[643px] lg:h-[120px] lg:w-auto lg:mr-[300px] lg:ml-[25px]"
        />

        {/* <img
          src={any}
          alt="any"
          className="absolute mt-[750px] h-[150px] ml-[840px] w-auto"
        />  */}
        <img
          src={sit}
          alt="sitpet"
          className="absolute mt-[40px] h-[210px] mr-[150px] w-auto lg:mt-[160px] lg:h-[210px] lg:mr-[150px] lg:w-auto"
        />
        <img
          src={fire}
          alt="fire"
          className="absolute mb-[620px] h-[90px] ml-[260px] mr-[0px] lg:ml-[0px] w-auto lg:mt-[880px] lg:h-[90px] lg:mr-[450px] lg:w-auto"
        />

        {/* This div will contain the four boxes */}
        <div className="flex  flex-col w-auto place-items-center mt-[1010px] lg:ml-[0px] lg:w-full lg:mt-[530px] lg:flex-row">
          <div className="h-[210px] w-[416px] lg:h-[210px] lg:w-[360px] lg:w-1/4 bg-gold text-center flex items-center justify-center shadow-lg font-black text-black text-[30px]">
            POSTER
          </div>
          <div className="h-[210px] w-[416px] lg:h-[210px] lg:w-[360px] lg:w-1/4 bg-sadpurple text-center flex items-center justify-center shadow-lg font-black text-blue-200 text-[30px]">
            STICKER
          </div>
          <div className="h-[210px] w-[416px] lg:h-[210px] lg:w-[360px] lg:w-1/4 bg-gold text-center flex items-center justify-center shadow-lg font-black text-black text-[30px]">
            BOOK MARK
          </div>
          <div className="h-[210px] w-[416px] lg:h-[210px] lg:w-[360px] lg:w-1/4 bg-peachred text-center flex items-center justify-center shadow-lg font-black text-blue-200 text-[30px]">
            STICK IT. POSTER
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
