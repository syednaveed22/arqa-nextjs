import HeroBusiness from "@/components/sections/HeroBusiness";
import ServicesBusiness from "@/components/sections/ServicesBusiness";
import FlagshipProjects from "@/components/sections/FlagshipProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Clients from "@/components/sections/Clients";

export default function Home() {
  return (
    <>
      <HeroBusiness />
      <WhyChooseUs />
      <FlagshipProjects />
      <ServicesBusiness />
      <Clients />
    </>
  );
}
