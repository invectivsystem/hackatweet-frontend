
import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { sendTweetSubmit } from '../reducers/tweet'
function Tweet(props) {

const [enterTweetContent, setEnterTweetContent] = useState('');
let connectedUser = useSelector((state) => state.currentUser.value)
console.log(connectedUser)

const sendTweetSubmit = () => {
  fetch('http://localhost:3000/tweets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({tweetContent: enterTweetContent, userId: connectedUser._id})
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  if (data.result) {
    props.addTweet(true)
    setEnterTweetContent('');
  }
  })
  };

return (
  <div className={styles.tweet}>
    <input type="text" placeholder="What's up ?" className={styles.input} onChange={(e)   => setEnterTweetContent(e.target.value)} value={enterTweetContent}/>
    <div className={styles.enterTweet}>
        <span className={styles.counter}>{enterTweetContent.length}/280</span>
        <button type="button" className={styles.btnTweet}onClick={() => sendTweetSubmit()}>Tweet</button>
    </div>
  </div>
);
  }

  export default Tweet;