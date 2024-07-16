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

const Home: React.FC = () => {
  return (
    <div className='main'>
      <Menu logo={"Shaima Hamila"} menuItems={menuItems} />
      <MyIntro
        socialLinks={socialLinks}
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
      <MyServices title='Services' subTitle='What I offer' services={services} />
      <MySkills />
      <MyQualification />
      <MyProjects />
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
const socialLinks = [
  { href: "https://www.linkedin.com/in/shaimahamila/", iconClass: "uil uil-linkedin-alt" },
  { href: "https://github.com/shaimaHamila", iconClass: "uil uil-github-alt" },
  { href: "https://dribbble.com/shaimahamila", iconClass: "uil uil-dribbble" },
  { href: "https://www.facebook.com/shaimahamila", iconClass: "uil uil-facebook-f" },
  { href: "https://www.instagram.com/shaimahamila/", iconClass: "uil uil-instagram" },
];
const services = [
  {
    iconClass: "uil uil-brackets-curly",
    title: "Web Developer",
    description: "I build responsive and dynamic web applications, providing seamless user experiences.",
    buttonText: "View My Github",
    buttonLink: "https://github.com/shaimaHamila",
  },
  {
    iconClass: "uil uil-wordpress-simple",
    title: "WordPress Developer",
    description: "I develop custom WordPress sites tailored to your needs, ensuring functionality and aesthetics.",
    buttonText: "View More",
    buttonLink: "#projects",
  },
  {
    iconClass: "uil uil-brush-alt",
    title: "UX/UI Designer",
    description: "I build responsive and dynamic web applications, providing seamless user experiences.",
    buttonText: "View My Dribbble",
    buttonLink: "https://dribbble.com/shaimaHamila",
  },
];
