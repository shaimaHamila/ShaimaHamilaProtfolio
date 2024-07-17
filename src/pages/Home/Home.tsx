import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineLightBulb,
  HiOutlineMail,
  HiOutlinePhotograph,
  HiOutlineUser,
} from "react-icons/hi";
import AboutMe from "../../components/templates/AboutMe/AboutMe";
import ContactMe from "../../components/templates/ContactMe/ContactMe";
import Footer from "../../components/templates/Footer/Footer";
import Menu from "../../components/templates/Menu/Menu";
import MyIntro from "../../components/templates/MyIntro/MyIntro";
import MyProjects from "../../components/templates/MyProjects/MyProjects";
import MyQualification from "../../components/templates/MyQualification/MyQualification";
import MyServices from "../../components/templates/MyServices/MyServices";
import MySkills from "../../components/templates/MySkills/MySkills";
import { Projects, Sections, Services, SkillsData, SocialLinks } from "../../MyData/MyData";

const Home: React.FC = () => {
  return (
    <div className='main'>
      <Menu logo={"Shaima Hamila"} menuItems={menuItems} />
      <MyIntro
        socialLinks={SocialLinks}
        imageSrc={"src/assets/ShaimaHamila.png"}
        title={"Hi, I'am Shaima Hamila"}
        subtitle={"< Software Engineering student & Full-stack JS developer /> "}
      />
      <AboutMe
        title={"About Me"}
        subTitle={"My introduction"}
        imageSrc={"src/assets/shaimaHamila-about-ing.png"}
        description={
          " I’m a Software Engineering student & Full-stack JS developer with 2 years of experience. I specialize increating high-quality web applications."
        }
        points={[
          "🚀 I deliver client-focused solutions.",
          "⚡ I'm a web developer Freelancer.",
          "🔥 I love sharing programming tips.",
        ]}
        yearsExperience={"02+"}
        completedProjects={"12+"}
        companiesWorked={"04+"}
        cvLink={"assets/pdf/ShaimaHamilaResume.pdf"}
      />
      <MyServices title='Services' subTitle='What I offer' services={Services} />
      <MySkills title={"My Skills"} subTitle={"My technical skills"} skills={SkillsData} />
      <MyQualification sections={Sections} title={"Qualification"} subTitle={"My personal journey"} />
      <MyProjects projects={Projects} title={"My work "} subTitle={"Most recent work"} />
      <ContactMe />
      <Footer />
    </div>
  );
};
export default Home;
const menuItems = [
  { to: "intro", icon: <HiOutlineHome />, label: "Home" },
  { to: "about", icon: <HiOutlineUser />, label: "About" },
  { to: "services", icon: <HiOutlineBriefcase />, label: "Services" },
  { to: "skills", icon: <HiOutlineLightBulb />, label: "Skills" },
  { to: "qualification", icon: <HiOutlineDocumentText />, label: "Qualification" },
  { to: "projects", icon: <HiOutlinePhotograph />, label: "Portfolio" },
  { to: "contact", icon: <HiOutlineMail />, label: "Contact" },
];
