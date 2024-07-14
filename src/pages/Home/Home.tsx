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
      <AboutMe />
      <MyServices />
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
