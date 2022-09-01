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
              src="/assets/img/ReferansLogolar/amazon.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
           height={150}
           width={220}
              quality={50}
              className="d-block   p-2"
              src="https://marka-logo.com/wp-content/uploads/2020/08/DHL-Logo.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
           height={150}
           width={220}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/3.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide className="">
            <Image
          height={150}
          width={220}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/2.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
            height={150}
            width={220}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/5.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
          height={150}
          width={220}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/6.png"
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
