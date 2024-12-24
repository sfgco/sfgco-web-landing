import Clients from "@/components/Clients";
import CoreFeature from "@/components/CoreFeature";
import CtaV2 from "@/components/CtaV2";
import FinancialBlog from "@/components/FinancialBlog";
import MembersCounter from "@/components/MembersCounter";
import WhyUs from "@/components/WhyUs";
import Hero from "@/components/heros/Hero";
const HomePage = () => {
  return (
    <>
      <Hero />
      <MembersCounter />
      <CoreFeature />
      <WhyUs />
      <Clients sectionTitle={false} spacing={"pt-0 pt-0"} />
      <FinancialBlog />
      <CtaV2 />
    </>
  );
};

export default HomePage;
