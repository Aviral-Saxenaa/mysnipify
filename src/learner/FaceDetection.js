import React, { useState, useEffect } from 'react';
import Image from '../assets/face.jpg';

const FaceDetection = () => {
  const [isLeftSectionVisible, setIsLeftSectionVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLeftSectionVisible(window.innerWidth > 615);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const continueButtonStyle = {
    borderRadius: '12px',
    padding: '15px 30px',
    backgroundColor: '#4285F4',
    color: 'white',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    marginTop: '30%',
    alignSelf: 'center',
    transition: 'background 0.3s ease',
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      width: '100%',
    },
    leftSection: {
      flex: '0 0 60vw',
      background: `
        repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px),
        repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px),
        #5813EA`,
      display: isLeftSectionVisible ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rightSection: {
      flex: isLeftSectionVisible ? '0 0 40vw' : '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EEF4FE',
    },
    formContainer: {
      height: '80vh',
      width: '90%',
      maxWidth: '450px',
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    loginTitle: {
      color: '#1E1E1E',
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '28px',
      fontWeight: 700,
      marginBottom: '10px',
    },
    loginSubtitle: {
      color: '#7D716A',
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '18px',
      marginBottom: '25px',
    },
    noteText: {
      color: 'red',
      fontSize: '16px',
      lineHeight: 1.6,
      fontFamily: 'DM Sans, sans-serif',
      textAlign: 'left',
      backgroundColor: '#fff5f5',
      padding: '12px',
      borderRadius: '8px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Image Section */}
      <div style={styles.leftSection}>
        <img
          src={Image}
          alt="Face"
          style={{
            height: '400px',
            width: '550px',
            borderRadius: '10%',
            boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.3)',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Right Content Section */}
      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <div style={styles.loginTitle}>FACE DETECTION</div>
          <div style={styles.loginSubtitle}>Please click on the continue button :)</div>

          <div style={styles.noteText}>
            * Please make sure that you give correct credentials for registering as a Teacher.
            Also, anyone cannot login from your account. Thanks!
          </div>

          <button style={continueButtonStyle}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default FaceDetection;
