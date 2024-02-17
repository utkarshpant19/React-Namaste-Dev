import {useState} from 'react';
import {LOGO_URL} from '../utils/constants';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState ('Login');

  return (
    <header className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
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
