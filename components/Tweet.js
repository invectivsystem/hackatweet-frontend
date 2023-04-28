import React from "react";
import styles from "./Tweet.module.css";

function Post() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

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
