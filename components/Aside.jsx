'use client'
import { mnnan } from "@/public/assets/Data";
import Image from "next/image";
import React, { useState } from "react";
import { MdMailOutline, MdPhone, MdCalendarToday, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaAngleDown, FaLinkedin } from "react-icons/fa";

const Aside = () => {
  const [show,setShow] = useState(false)
  return (
    <aside className={`sidebar ${show ? 'active':''}`}>
      <div className="sidebar-info">
        <Image
          src={mnnan}
          alt="Ishtiaq Ahmad"
          className="w-auto h-auto avatar-box"
          height={200}
          width={200}
        />
        <div className="info-content">
          <h1 className="name">Ishtiaq Ahmad</h1>
          <p className="title">Custom Website & WordPress Developer</p>
        </div>
        <button className="info_more-btn" onClick={()=>setShow(!show)}>
          <FaAngleDown className='text-[#ffda6b]'/>
        </button>
      </div>

      <div className="sidebar-info_more">
        <ul className="contacts-list ">
          <li className="contact-item ">
            <div className="icon-box">
              <MdMailOutline color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:ig020888@gmail.com" className="contact-link">
              ig020888@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdPhone color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+923220541903" className="contact-link">
                03220541903
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdCalendarToday color="goldenrod"  />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2001-05-18">May 18, 2001</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdLocationOn color="goldenrod"  />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Vehari, Punjab, Pakistan</address>
            </div>
          </li>
        </ul>

        <ul className="social-list ">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/ishtiaq-ahmad-418373295" className="social-link">
              <FaLinkedin   className="text-gray-300"/>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <FaTwitter className="text-gray-300"  />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/ishtiaq_ahmad13/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="text-gray-300"  />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
