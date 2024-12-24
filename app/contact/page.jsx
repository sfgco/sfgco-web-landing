import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import NewsLetter from "@/components/NewsLetter";
import PageHero from "@/components/heros/PageHero";
import React from "react";

const page = () => {
  return (
    <>
      <PageHero
        subtitle="GET IN TOUCH"
        title="Contact our Team <br/> for assistance"
        paragraph="If you have any questions or need help, our team is here to assist you. Fill out the form below, and we’ll get back to you as soon as possible."
      />
      <ContactInfo />
      <ContactForm />
      <NewsLetter />
    </>
  );
};

export default page;
