const MyProjects: React.FC = () => {
  return (
    <section id='projects'>
      {/* <!--==================== My work ====================--> */}
      <section className='portfolio section' id='portfolio'>
        <h2 className='section__title'>My work</h2>
        <span className='section__subtitle'>Most recent work</span>

        <div className='services__container container grid'>
          {/* <!--==================== SERVICES 1 ====================--> */}
          <div className='work__content'>
            <div>
              <img src='/assets/img/work1.png' />
              <h3 className='work__title'>Signin app design</h3>
              <p className='work__description'>I Designed this signIn page.</p>
            </div>

            <a
              className='button button--flex button--small button--link services__button'
              href='https://dribbble.com/shots/16137127-Sign-in'
              target='_blank'
            >
              View Project
              <i className='uil uil-arrow-right button__icon' />
            </a>
          </div>

          {/* <!--==================== SERVICES 2 ====================--> */}
          <div className='work__content'>
            <div>
              <img src='/assets/img/Work2.png' />
              <h3 className='work__title'>Logo design</h3>
              <p className='work__description'>I Designed this logo for a travel agency</p>
            </div>

            <a
              className='button button--flex button--small button--link services__button'
              href='https://dribbble.com/shots/16662009-Asfar-El-Hamd-Logo-Travel-Agency-logo'
              target='_blank'
            >
              View Project
              <i className='uil uil-arrow-right button__icon'></i>
            </a>
          </div>

          {/* <!--==================== SERVICES 3 ====================--> */}
          <div className='work__content'>
            <div>
              <img src='/assets/img/work3.png' />
              <h3 className='work__title'>Personal portfolio</h3>
              <p className='work__description'>I developed this Personal portfolio.</p>
            </div>

            <a
              className='button button--flex button--small button--link services__button'
              href='https://www.karimbenmbarek.com/index.html'
              target='_blank'
            >
              View Porject
              <i className='uil uil-arrow-right button__icon'></i>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
export default MyProjects;
