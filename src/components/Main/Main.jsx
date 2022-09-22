import React from "react";
import { Promo } from "./Promo";
import { Techs } from "./Techs/Techs";
import { Portfolio } from "./Portfolio";
import { AboutMe } from "./AboutMe";
import { AboutProject } from "./AboutProject/AboutProject";

export const Main = () => {
  return (
    <>
      <Promo />
      <AboutProject/>
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
};
