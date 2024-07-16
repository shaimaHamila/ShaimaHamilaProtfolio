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
      <MySkills title={"My Skills"} subTitle={"My technical skills"} skills={skillsData} />
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
const skillsData = [
  { iconClass: "devicon-react-original colored", name: "React Ts", category: "Frontend" },
  { iconClass: "devicon-angularjs-plain colored", name: "Angular", category: "Frontend" },
  { iconClass: "devicon-redux-original colored", name: "Redux Toolkit", category: "Frontend" },
  { iconClass: "devicon-tailwindcss-original colored", name: "Tailwind", category: "Frontend" },
  { iconClass: "devicon-bootstrap-plain colored", name: "Bootstrap", category: "Frontend" },
  { iconClass: "devicon-antdesign-plain colored", name: "Ant Design", category: "Frontend" },
  { iconClass: "devicon-express-original colored", name: "Express Ts", category: "Frontend" },
  { iconClass: "devicon-spring-original colored", name: "Spring Boot", category: "Frontend" },
  { iconClass: "devicon-dot-net-plain colored", name: ".NET", category: "Frontend" },
  { iconClass: "devicon-firebase-plain colored", name: "Firebase", category: "Frontend" },
  { iconClass: "devicon-mongodb-plain colored", name: "MongoDB", category: "Frontend" },
  { iconClass: "devicon-mysql-original colored", name: "SQL", category: "Frontend" },
  { iconClass: "devicon-docker-plain colored", name: "Docker", category: "Frontend" },
  { iconClass: "devicon-git-plain colored", name: "Git", category: "Frontend" },
  { iconClass: "devicon-wordpress-plain colored", name: "WordPress", category: "Frontend" },
  { iconClass: "devicon-figma-plain colored", name: "Figma", category: "Frontend" },
];
