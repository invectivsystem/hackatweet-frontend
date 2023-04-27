import React from 'react'
import Tweet from './Tweet'
import LastTweet from './LastTweet'
import Trends from './Trends'

export default function PageAccueil() {
  return (
    <div>
      <Tweet></Tweet>
      <Trends></Trends>
      <LastTweet></LastTweet>
    </div>
  )
}
