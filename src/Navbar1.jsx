import React, { useState } from 'react';
import Logo from './assets/snipify_1.png';
import { useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('instant');

  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    backgroundColor: '#fff',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '8vh',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const blueContainerStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  };

  const buttonStyle = (isActive) => ({
    padding: '8px 18px',
    backgroundColor: 'transparent',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderBottom: isActive ? '2px solid #5813EA' : '2px solid transparent',
    cursor: 'pointer',
    color: '#000',
    transition: 'all 0.2s ease-in-out',
  });

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const avatarStyle = {
    backgroundColor: '#D9D9D9',
    borderRadius: '50%',
    height: 40,
    width: 40,
    cursor: 'pointer',
  };

  const handleClick = (key, path) => {
    setActiveButton(key);
    navigate(path);
  };

  return (
    <div style={navbarStyle}>
      {/* Logo */}
      <div style={blueContainerStyle}>
        <img src={Logo} alt="Logo" style={{ height: '40px' }} />
      </div>

      {/* Navigation Buttons */}
      <div style={rightSectionStyle}>
        <button
          style={buttonStyle(activeButton === 'instant')}
          onClick={() => setActiveButton('instant')}
        >
          Instant
        </button>
        <button
          style={buttonStyle(activeButton === 'contribute')}
          onClick={() => handleClick('contribute', '/learner/sessions')}
        >
          Contribute
        </button>
        <button
          style={buttonStyle(activeButton === 'genie')}
          onClick={() => handleClick('genie', '/ai-genie')}
        >
          AI Genie
        </button>

        {/* Avatar */}
        <div style={avatarStyle}></div>
      </div>
    </div>
  );
};

export default Navbar1;
