import React from "react";
import styles from "../styles/Tweet.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Post() {
  const [enterTweetContent, setEnterTweetContent] = useState("");
  const dispatch = useDispatch();
  let connectedUser = useSelector((state) => state.user.value);
  console.log(connectedUser);

  const sendTweetSubmit = () => {
    fetch(`http://localhost:3000/tweets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: enterTweetContent,
        token: connectedUser.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          dispatch(
            sendTweetSubmit({ tweet: enterTweetContent, token: user.token })
          );
          setEnterTweetContent("");
        }
      });
  };
  return (
    <div className={styles.tweet}>
      <input
        type="text"
        placeholder="What's up ?"
        className={styles.input}
        onChange={(e) => setEnterTweetContent(e.target.value)}
        value={enterTweetContent}
      />
      <div className={styles.enterTweet}>
        <span className={styles.counter}>{enterTweetContent.length}/280</span>
        <button
          type="button"
          className={styles.btnTweet}
          onClick={() => sendTweetSubmit()}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default Post;
