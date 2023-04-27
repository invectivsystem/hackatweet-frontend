import styles from '../styles/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import SignUp from './SignUp'; 
import ReactModal from 'react-modal';


function Login() {


 
   
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };
  
  return (
    
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon1} rotation={180}  />        
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.content}>
            <div className={styles.h1} >
            <FontAwesomeIcon icon={faTwitter} className={styles.icon2} rotation={180}  />        

              <h1>See what's <br></br> happening</h1>
              <h1></h1>
            </div>
            <div>
              <h3 className={styles.h3}>Join Hackatweet today.</h3>
            </div>
            <div>
              <button className={styles.signup} onClick={() => {openModal()}}>Sign up</button>
            </div>
            <div className={styles.h6}>
              <h6>Already have an account ?</h6>
            </div>
            <div>
            <button className={styles.signin} onClick={() => {openModal2()}}>Sign in</button>
            </div>
            <div>
            

            </div>


          </div>
        </div>
        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'transparent',
            border: 'none',
          },
          content: {
            backgroundColor: '#151D26',
            width: '30vw',
            height: '45vh',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            marginTop: '20vh'
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1.5rem',
          }}
        >x</button>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon3} rotation={180}  />        

      <div>
        <input className={styles.input} type="text" placeholder="Firstname" />
      </div>
      <div>
        <input className={styles.input} type="text" placeholder="Username" />
      </div>
      <div>
        <input className={styles.input} type="password" placeholder="Password" />
      </div>
      <div>
        <button className={styles.btninput}>Signup</button>
      </div>
      </ReactModal>
      <ReactModal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        style={{
          overlay: {
            backgroundColor: 'transparent',
            border: 'none',
          },
          content: {
            backgroundColor: '#151D26',
            width: '30vw',
            height: '45vh',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            marginTop: '20vh'
          },
        }}
      >
        <button
          onClick={closeModal2}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1.5rem',
          }}
        >x</button>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon3} rotation={180}  />        

      <div>
        <input className={styles.input} type="text" placeholder="Username" />
      </div>
      <div>
        <input className={styles.input} type="password" placeholder="Password" />
      </div>
      <div>
        <button className={styles.btninput}>Signin</button>
      </div>
      </ReactModal>
    
      </main>
    
      
  )

}
  


export default Login;
