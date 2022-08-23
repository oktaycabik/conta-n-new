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
      <div className="row pe-5 ps-5 mt-5  justify-content-center">
        <h2 className="text-center">Kunden der Conlinving GmbH</h2>
        <h4 className="text-center mt-2">
          Durch das Tagesgeschäft mit großen Kunden wendet sich Conliving an
          Großunternehmen aber auch an mittelständische und kleine Unternehmen.
          Conliving ist der ideale Partner für individuelle Wünsche und
          Planungen
        </h4>
      </div>
      <div className="row pe-5 ps-5 mt-5 mb-5 justify-content-center">
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
                perPage: 3,
              },
              769: {
                perPage: 3,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide className="ms-5">
            <Image
             height={100}
             width={170}
              quality={50}
              className="d-block  p-2"
              src="/assets/img/ReferansLogolar/1.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
            height={100}
            width={170}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/2.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
           height={100}
           width={170}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/3.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide className="ms-5">
            <Image
            height={100}
            width={170}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/4.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
            height={100}
            width={170}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/5.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              height={100}
              width={170}
              quality={50}
              className="d-block   p-2"
              src="/assets/img/ReferansLogolar/6.png"
              alt="First slide"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
                height={100}
                width={170}
              quality={50}
              className="d-block   p-2"
              className="  p-2"
              src="/assets/img/ReferansLogolar/7.png"
              alt="First slide"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Referance;
