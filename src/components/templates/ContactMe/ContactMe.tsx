import React, { useState } from "react";
import "./ContactMe.scss";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";

type ContactInfo = {
  icon: string;
  title: string;
  subtitle: string;
};

type ContactMeProps = {
  contactInformation: ContactInfo[];
  submitForm: (formData: { fullName: string; email: string; message: string }) => void;
  subTitle: string;
  title: string;
};

const ContactMe: React.FC<ContactMeProps> = ({ contactInformation, submitForm, subTitle, title }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    submitForm(formData);
  };
  return (
    <section id='contact' className='contact section'>
      <SectionTitle title={title} subTitle={subTitle} />

      <div className='contact__container container grid'>
        <div>
          {contactInformation.map((info, index) => (
            <div className='contact__information' key={index}>
              <i className={info.icon + " contact__icon"}></i>
              <div>
                <h3 className='content__title'>{info.title}</h3>
                <span className='contact__subtitle'>{info.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        <form className='contact__form grid'>
          <div className='contact__inputs grid'>
            <div className='contact__content'>
              <label className='contact__label'>Full Name</label>
              <input
                type='text'
                name='fullName'
                className='contact__input'
                placeholder='Your name'
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className='contact__content'>
              <label className='contact__label'>Email</label>
              <input
                type='email'
                name='email'
                className='contact__input'
                placeholder='name@gmail.com'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='contact__content'>
            <label className='contact__label'>Message</label>
            <textarea
              rows={7}
              name='message'
              className='contact__input'
              placeholder='Your message ...'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
            <a className='button button--flex' onClick={handleSubmit}>
              Send Message
              <i className='uil uil-message button__icon'></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
