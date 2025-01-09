import MembersCounter from "@/components/MembersCounter";
import NewsLetter from "@/components/NewsLetter";
import Pricing from "@/components/Pricing";
import ServiceContent from "@/components/ServiceContent";
import { InvestmentsData } from "@/data/data";

export async function generateStaticParams() {
  return InvestmentsData.map((item) => ({
    slug: item.slug,
  }));
}

const ServiceDetails = (props) => {
  const slug = props.params.slug;
  const data = InvestmentsData.find((post) => post.slug === slug);

  return (
    <>
      <ServiceContent data={data} />
      <NewsLetter />
    </>
  );
};

export default ServiceDetails;
