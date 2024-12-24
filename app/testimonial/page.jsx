import PageHero from "@/components/heros/PageHero";
import TestimonialSingle from "@/components/TestimonialSingle";

const Testimonial = () => {
  return (
    <>
      <PageHero
        title="What our customer’s say <br/> about our company"
        paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
      />
      <TestimonialSingle />
    </>
  );
};

export default Testimonial;
