import {useEffect, useState} from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState ('Login');

  console.log('Header rendered');
useEffect(()=>{
  console.log('Use effect called');
}, [loginBtn])

  return (
    <header className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About Us</Link></li>
          <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
          <li className="nav-item">Cart</li>
          <button onClick={()=>{
            setLoginBtn(loginBtn == 'Login' ? 'Logout' : 'Login')
          }}>{loginBtn}</button>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
