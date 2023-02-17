import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss';
import LogoJS from '../../assets/images/logo-s.png'
import LogoJSbutitle from '../../assets/images/logo_sub.png'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo link-reset" to="/">
        <img src={LogoJS} alt="logo" />
        <img className="sub-logo" src={LogoJSbutitle} alt="logo" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/">
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
      </nav>
      <ul className='list-reset' >
        <li>
          <a
            target="_blank"
            rel='noreferrer'
            href='https://linkedin.com/in/javohir-mirjalilov-16136524b'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#fff"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel='noreferrer'
            href='https://github.com/Infinity-CHL'
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#fff"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel='noreferrer'
            href='https://t.me/js_days'
          >
            <FontAwesomeIcon
              icon={faTelegram}
              color="#fff"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel='noreferrer'
            href='https://www.instagram.com/infinity__19_/'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#fff"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
