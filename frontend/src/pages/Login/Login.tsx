import { useState } from "react";
import "./Login.scss";

type LoginForm = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const spansArray = Array.from({ length: 200 }, (_, index) => <span className='signin__span' key={index}></span>);

  const [loginForm, setLoginForm] = useState<LoginForm>({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", loginForm);
    setLoginForm({ username: "", password: "" });
  };

  return (
    <section className='login__section'>
      {spansArray}
      <div className='signin'>
        <div className='signin__content'>
          <h2>Sign In</h2>

          <form className='form' onSubmit={handleSubmit}>
            <div className='inputBox'>
              <input
                className='signin__input'
                type='text'
                name='username'
                value={loginForm.username}
                onChange={handleChange}
                required
              />
              <i>Username</i>
            </div>

            <div className='inputBox'>
              <input
                className='signin__input'
                type='password'
                name='password'
                value={loginForm.password}
                onChange={handleChange}
                required
              />
              <i>Password</i>
            </div>

            <div className='inputBox'>
              <input className='signin__input' type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
