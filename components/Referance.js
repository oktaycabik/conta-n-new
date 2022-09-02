import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import Image from "next/image";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
const Referance = () => {
  return (
    <section className="container">
      <div className="row pr-5 pl-5  mt-3  justify-content-center">
        <h2 className="text-center  referenzen-title">Referenzen</h2>
        
      </div>
      <div className="row pr-5 pl-5  mb-3 justify-content-center">
        <Splide 
          classes={{
            prev: "splide__arrow--prev ArowPrevOut",
            next: "splide__arrow--next ArowNextOut",
            pagination: "splide__pagination Pagintaion",
          }}
          options={{
            rewind: true,
            gap: "0.5rem",
            perPage: 4,
            arrows: true,
            speed: 3000,
            pagination: false,
           
            breakpoints: {
              1400: {
                perPage: 3,
              },
              994: {
                perPage: 2,
              },
              769: {
                perPage: 1,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide className="">
            <Image
             height={150}
             width={220}
              quality={50}
              className="d-block  p-2"
              src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/593836fd-444d-4fd4-6987-b96d18363200/public"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
           height={150}
           width={220}
              quality={50}
              className="d-block   p-2"
              src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/032badb7-5866-43a8-74bc-2af8db31ba00/public"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
           height={150}
           width={220}
              quality={50}
              className="d-block   p-2"
              src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/6eb5f68c-194b-4317-8465-6b97fe139e00/public"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide className="">
            <Image
          height={150}
          width={220}
              quality={50}
              className="d-block   p-2"
              src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/cf619a0e-84f0-43fb-2fdb-9d1c1061a700/public"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
            height={150}
            width={220}
              quality={50}
              className="d-block   p-2"
              src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/b31ff313-599e-4800-1267-d5c10d93de00/public"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
          height={150}
          width={220}
              quality={50}
              className="d-block   p-2"
              src="https://imagedelivery.net/PadbDhNfBOcxGIOgnEMBuA/b94e80ed-55e4-40ca-0476-d0448a325b00/public"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
               height={150}
               width={220}
              quality={50}
              className="d-block   p-2"
            
              src="https://media.glassdoor.com/sqll/2870486/gro%C3%9Fe-vehne-squarelogo-1568723765801.png"
              alt="First slide"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Referance;
