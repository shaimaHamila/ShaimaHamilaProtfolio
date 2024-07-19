import "./Login.scss";
const Login = () => {
  const spansArray = Array.from({ length: 200 }, (_, index) => <span className='signin__span' key={index}></span>);
  return (
    <section className='login__section'>
      {spansArray}
      <div className='signin'>
        <div className='signin__content'>
          <h2>Sign In</h2>

          <div className='form'>
            <div className='inputBox'>
              <input className='signin__input' type='text' required /> <i>Username</i>
            </div>

            <div className='inputBox'>
              <input className='signin__input' type='password' required /> <i>Password</i>
            </div>

            {/* <div className='links'>
              <a href='#'>Forgot Password</a> <a href='#'>Signup</a>
            </div> */}

            <div className='inputBox'>
              <input className='signin__input' type='submit' value='Login' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
