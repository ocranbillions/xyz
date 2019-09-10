/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment, useState } from 'react';
// import InputField from '@Common/form/InputField';
import ToggleDisplay from 'react-toggle-display';
import API_SERVICE, { API_URL } from '@Utils/API';
import axios from 'axios';
import './shareArticle.scss';

const ShareArticle = () => {
  const [display, setDisplay] = useState(false);
  const [emailInput, setEmailInputDisplay] = useState(false);
  const [email, setEmail] = useState('');

  const handleChange = event => setEmail(event.target.value);
  const handleClick = () => setDisplay(!display);
  const hideIcons = () => setDisplay(false);

  const openForm = () => {
    setEmailInputDisplay(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const articleUrl = window.location.pathname.split('/');
    const slug = articleUrl[2];

    try {
      await axios.get(`http://localhost:3000/api/v1/articles/${slug}/share/mail`, { email });
      // await API_SERVICE.get(`${API_URL}/articles/${slug}/share/mail`, { email });
    } catch (error) {
      console.log(error.message);
    }
  };

  const shareArticle = async () => {
    const articleUrl = window.location.pathname.split('/');
    const slug = articleUrl[2];
    try {
      const fetchArticle = await axios.get(`http://localhost:3000/api/v1/articles/${slug}/share/facebook`);
      // API_SERVICE.get(`/articles/${slug}/share/facebook`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <ToggleDisplay show={display}>
        <div className="share-icons-wrapper" onClick={hideIcons}>
          <i onClick={shareArticle}> <img src="https://img.icons8.com/color/48/000000/facebook-circled.png" alt="Facebook" className="icons" /></i>
          <i> <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="icons" /></i>
          <i onClick={openForm}> <img src="https://img.icons8.com/color/48/000000/send-mass-email.png" alt="Email" className="icons" /> </i>
        </div>
      </ToggleDisplay>
      {
        emailInput
        && (
        <form onSubmit={handleSubmit} id="email-form">
          <input
            id="email-field"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <button
            type="submit"
            id="submit"
            value="Submit"
          > Submit
          </button>
        </form>
        )
      }
      <i className="material-icons" onClick={handleClick}>share</i>
    </Fragment>
  );
};

export default ShareArticle;
