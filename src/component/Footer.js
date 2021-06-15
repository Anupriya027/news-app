import React from 'react';
import './Footer.css';
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';
const Footer = () => (
    <div className="footerimage">
       <img src={img1} alt="Network Problem" />
       <img src={img2} alt="Network Problem" />
       <img src={img3} alt="Network Problem" />
       <img src={img4} alt="Network Problem" />
       <div className="footer">
        News Portal | Anupriya Gupta
        </div>
       </div>
    
)

export default Footer;