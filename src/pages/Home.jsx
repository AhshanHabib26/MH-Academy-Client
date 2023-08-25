import Banner from "../components/Banner";
import HCourse from "../components/HCourse";
import SkillsBanner from "../components/SkillsBanner";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <SkillsBanner />
      <HCourse />
      <WhyChoose />
    </div>
  );
}
