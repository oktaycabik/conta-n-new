import React from "react";
import AnlageInfo from "../components/AnlageInfo";
import Banner from "../components/Banner";
import Catalog from "../components/Catalog";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import ContainerIntro from "../components/ContainerIntro";
import ImportantQuestions from "../components/ImportantQuestions";
import KurzesAngebot from "../components/KurzesAngebot";
import Referance from "../components/Referance";
import ReferanceInfo from "../components/ReferanceInfo";
import WhyWeComponent from "../components/WhyWeComponent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
const index = () => {
  return (
    <>
      <Splide 
    
      className="p-0"
         options={ {
          rewind: true,
          speed: 1000,
          autoplay:true,
          arrows:false,
          type:"loop",
         
        } }
      aria-label="My Favorite Images">
        <SplideSlide>
          <Banner />
        </SplideSlide>
        <SplideSlide>
          <Banner />
        </SplideSlide>
        <SplideSlide>
          <Banner />
        </SplideSlide>
      </Splide>

      <ContainerIntro />
      <WhyWeComponent />
      <KurzesAngebot />
      <Referance />
      <Categories />
      <Contact />
      <ReferanceInfo />
      <AnlageInfo />
      <ImportantQuestions />
      <Catalog />
    </>
  );
};

export default index;
