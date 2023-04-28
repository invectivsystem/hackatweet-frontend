import React from 'react'
import Tweet from './Tweet'
import  LastTweet  from './LastTweet'
import Trends from './Trends'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { logout } from '../reducers/user'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import styles from '../styles/PageAccueil.module.css'

 function PageAccueil() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const handleLogout = () => {
		dispatch(logout());
    router.push('/')
	};

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

  return (
    <div className={styles.content}>
        <div className={styles.container1}>

          <FontAwesomeIcon icon={faTwitter} className={styles.icon2} rotation={180}  /> 


          

              <button className={styles.logout} onClick={() => {handleLogout()}}>Logout</button>
          
        </div>
        <div className={styles.container2}>
          <h4 className={styles.home}>Home</h4>
          <Tweet></Tweet>
          <LastTweet></LastTweet>
        </div>
        <div className={styles.container3}>
          <h4 className={styles.trend}>Trends</h4>

           <Trends></Trends>

        </div>
        
      
    </div>
  )
}

export default PageAccueil;