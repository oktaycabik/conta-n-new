import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import products from "../data/products.json";
import Link from "next/link";
import Image from "next/image";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
const SmilarProducts = ({ product }) => {
  const filterProducts = products.filter(
    (pro) => pro.category === product.category
  );
  return (
    <div className="container mt-5 mb-4 ">
      <div className="pe-5 ps-5 ">
      <h3 className="text-center pb-1">Ähnliche Produkte</h3>
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
            speed: 3000,
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
            lazyLoad: "nearby",
          }}
          aria-label="My Favorite Images"
        >
            
          {filterProducts.map((product) => {
            return (
              <SplideSlide key={product.id}>
                <Link href={`/container/${product.slug}`}>
                  <div className="  col-12 " key={product.id}>
                    <div className="card-img-top text-center ">
                      <Image
                        width={280}
                        height={230}
                        objectFit="cover"
                        className="d-block w-100"
                        src={product.image.ima1}
                        alt="First slide"
                        quality={100}
                      />
                    </div>
                  
                      <h4 className="text-center mt-2">{product.title}</h4>
                      <div className="d-flex justify-content-center">
                      <button className="button-dark-small mt-2">Zum Produkt</button>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default SmilarProducts;
