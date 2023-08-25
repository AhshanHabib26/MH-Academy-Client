import Banner from "../components/Banner";
import Categorie from "../components/Categorie";
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
      <Categorie />
    </div>
  );
}
