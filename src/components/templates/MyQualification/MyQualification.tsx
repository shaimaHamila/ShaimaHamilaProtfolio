import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import "./MyQualification.scss";
const MyQualification: React.FC = () => {
  return (
    <section className='qualification__section section' id='qualification'>
      {/* <!--==================== QUALIFICATION ====================--> */}
      <SectionTitle title={"Gualification"} subTitle={"My personal journy"} />

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className='qualification__button button--flex qualification__active' data-target='#education'>
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div className='qualification__button button--flex' data-target='#work'>
            <i className='uil uil-bag qualification__icon'></i>
            work
          </div>
        </div>

        <div className='qualification__sections'>
          {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
          <div className='qualification__content qualification__active ' data-content id='education'>
            {/* <!--==================== QUALIFICATION 1 ====================--> */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Computer Science and Mulimedia</h3>
                <span className='qualification__subtitle'>ISIMS | Graduated - University</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2019 - 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 2 ==================== */}
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Design</h3>
                <span className='qualification__subtitle'>Tunisia - Institute</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2009 - 2014
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 4 ====================--> */}
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Farhat Hached High School</h3>
                <span className='qualification__subtitle'>Bachelor of Mathematics</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2018 - 2019
                </div>
              </div>
            </div>
          </div>

          {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
          <div className='qualification__content ' data-content id='work'>
            {/* <!--==================== QUALIFICATION 1 ====================--> */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Freelancer</h3>
                <span className='qualification__subtitle'>Freelancer.com</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 2 ====================--> */}
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>CEO Co-Founder</h3>
                <span className='qualification__subtitle'>Smart Move Solutions - Tunis</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Present
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 3 ====================--> */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>UX Agile manager</h3>
                <span className='qualification__subtitle'>UX Academy - Tunis</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>3 months 2021
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 4 ====================--> */}
            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Designer</h3>
                <span className='qualification__subtitle'>Flush - US</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>2 months 2021
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 5 ====================--> */}
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Developer</h3>
                <span className='qualification__subtitle'>TeamDev Internship - Sousse</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>2 months 2020
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MyQualification;
