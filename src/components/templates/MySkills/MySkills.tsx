import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MySkills.scss";
const MySkills: React.FC = () => {
  return (
    <section id='skills' className='skills section'>
      <SectionTitle title={"My Skills"} subTitle={"subTitle"} />

      <div className='skills__container container '>
        <div className='skills__card '>
          <i className='devicon-react-original colored skills__icon' />
          <div>
            <h3 className='skills__name'>React Ts</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-angularjs-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>Angular</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-redux-original colored skills__icon' />
          <div>
            <h3 className='skills__name'>Redux Toolkit</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-tailwindcss-original colored skills__icon' />
          <div>
            <h3 className='skills__name'>Tailwind</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-bootstrap-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>Bootstrap</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-antdesign-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>Ant Design</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-express-original colored skills__icon' />
          <div>
            <h3 className='skills__name'>Express Ts</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-spring-original colored skills__icon' />
          <div>
            <h3 className='skills__name'>Spring Boot</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-dot-net-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>.NET</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-firebase-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>Firebase</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-mongodb-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>MongoDB</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-mysql-original colored skills__icon' />
          <div>
            <h3 className='skills__name'>SQL</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-docker-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>Docker</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-git-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>Git</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
        <div className='skills__card '>
          <i className='devicon-wordpress-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>WordPress</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>

        <div className='skills__card '>
          <i className='devicon-figma-plain colored skills__icon' />
          <div>
            <h3 className='skills__name'>Figma</h3>
            <p className='skills__category'>Frontend</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MySkills;
