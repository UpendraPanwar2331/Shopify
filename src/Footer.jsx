import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import './CSS/Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box footer-box1">
        <p className="footer-heading">Shop Non-Stop on Meesho</p>
        <p className="footer-small">Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery</p>
        <div className="footer-icons">
          <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" />
          <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" />
        </div>
      </div>

      <div className="footer-box footer-box2">
        <p>Careers</p>
        <p>Become a supplier</p>
        <p>Hall of Frame</p>
      </div>

      <div className="footer-box footer-box3">
        <p>Legal and Policies</p>
        <p>Meesho Tech Blog</p>
        <p>Notices and Returns</p>
      </div>

      <div className="footer-box footer-box4">
        <p className="footer-heading">Reach out to us</p>
        <div className="footer-icons">
          <FacebookIcon className="footer-icon" />
          <InstagramIcon className="footer-icon" />
          <YouTubeIcon className="footer-icon" />
          <TwitterIcon className="footer-icon" />
        </div>
      </div>

      <div className="footer-box footer-box5">
        <p className="footer-heading">Contact Us</p>
        <p className="footer-small">
          Fasnear Technologies Private Limited CIN:U74900KA2015PTC082263 06-105-B, 06-102, (138 Wu) Vaishnavi Signature,
          No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India E-mail address:
          query@meesho.com © 2015-2022 Meesho.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
