import AboutValue from "@/components/AboutValue";
import Counter from "@/components/Counter";
import CtaV2 from "@/components/CtaV2";

import PageHero from "@/components/heros/PageHero";
import Integration from "@/components/Integration";
import PaymentFeatures from "@/components/PaymentFeatures";
import TeamMembers from "@/components/TeamMembers";
import TestimonialSlider from "@/components/TestimonialSlider";
import { AboutFeaturesData } from "@/data/data";
import React from "react";

const About = () => {
  return (
    <>
      <CtaV2 />
      <TestimonialSlider />
      <Counter />
      <TeamMembers />
    </>
  );
};

export default About;
