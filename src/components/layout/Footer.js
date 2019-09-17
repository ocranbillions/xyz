import React from 'react';

const Footer = () => {
  return (
    <footer className="padding-top-small">
      <div className="foot_contents">
        <div className="copyw">
          <h4>2019 Banka!</h4>
          <p><a href="">User Agreement</a></p>
          <p><a href="">General Inquiry</a></p>
          <p><a href="">World Bank Group</a></p>
        </div>
        <div className="quick-inks">
          <h4>QUICK LINKS</h4>
          <p><a href="">For Clients</a></p>
          <p><a href="">For Investors</a></p>
          <p><a href="">For Media</a></p>
          <p><a href="">For Stakeholders</a></p>
          <p><a href="">For Job Seekers</a></p>
        </div>
        <div className="accountability">
          <h4>ACCOUNTABILITY</h4>
          <p><a href="">Disclosed Projects</a></p>
          <p><a href="">Compliance Advisor Ombudsman</a></p>
          <p><a href="">Independent Evaluation</a></p>
          <p><a href="">Group</a></p>
          <p><a href="">Personal Data Privacy</a></p>
          <p><a href="">Policy</a></p>
        </div>
        <div className="foot_social">
          <h4>FOLLOW US ON SOCIAL MEDIA!</h4>
          <img src="../assets/images/media-icons/facebook.svg" alt="" />
          <img src="../assets/images/media-icons/twitter.svg" alt="" />
          <img src="../assets/images/media-icons/instagram.svg" alt="" />
          <img src="../assets/images/media-icons/youtube.svg" alt="" />
          <img src="../assets/images/media-icons/medium.svg" alt="" />
          <img src="../assets/images/media-icons/linkedin.svg" alt="" />
          <img src="../assets/images/media-icons/snapchat.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
