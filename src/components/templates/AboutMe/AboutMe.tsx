const AboutMe: React.FC = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>

      <div className='about__container container grid'>
        <img src='src\assets\shaimaHamila-about-ing.png' alt='about me' className='about__img' />

        <div className='about__data'>
          <p className='about__description'>
            Front end developer & Designer, with extensive knowledge and years of experience, working in development and
            UI / UX design, delivering quality work.
          </p>

          <div className='about__info'>
            <div>
              <span className='about__info-title'>02+</span>
              <span className='about__info-name'>
                years
                <br />
                experience
              </span>
            </div>
            <div>
              <span className='about__info-title'>12+</span>
              <span className='about__info-name'>
                Completed
                <br />
                project
              </span>
            </div>
            <div>
              <span className='about__info-title'>04+</span>
              <span className='about__info-name'>
                Companies
                <br />
                worked
              </span>
            </div>
          </div>

          <div className='about__buttons'>
            <a download='' href='assets/pdf/ChaimaHamilaResume.pdf' className='button button--flex'>
              Download CV<i className='uil uil-download-alt button__icon'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
