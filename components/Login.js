import styles from '../styles/Login.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import ReactModal from 'react-modal';
import { login } from '../reducers/user';



function Login() {

  const dispatch = useDispatch();
  const router = useRouter();
  const[signUpFirstname, setSignupFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const user = useSelector((state) => state.user.value);

  console.log("username", signUpUsername)
  console.log("firstname", signUpFirstname)
  console.log("password", signUpPassword)

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
        console.log("checkData", data)
				if (data.result) {

					dispatch(login({ username: signUpUsername, token: data.token }));
					setSignupFirstname('');
          setSignUpUsername('');
					setSignUpPassword('');

				}
			});
	};
   
  const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};




  if (user.token) {
    router.push('/accueil')
  }
 
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
        <input className={styles.input} type="text" value={signUpFirstname} placeholder="Firstname" onChange={(e) => setSignupFirstname(e.target.value)}/>
      </div>
      <div>
        <input className={styles.input} type="text" value={signUpUsername} placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)}/>
      </div>
      <div>
        <input className={styles.input} type="password" value={signUpPassword} placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)} />
      </div>
      <div>
        <button className={styles.btninput} onClick={() => {handleRegister()}}>Signup</button>
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
        <input className={styles.input} type="text" placeholder="Username" value={signInUsername} onChange={(e) => setSignInUsername(e.target.value)} />
      </div>
      <div>
        <input className={styles.input} type="password" placeholder="Password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)}/>
      </div>
      <div>
        <button className={styles.btninput} onClick={() => {handleConnection()}}>Signin</button>
      </div>
      </ReactModal>
    
      </main>
    
      
  )

}
  


export default Login;
