import React, { Suspense, useState, useEffect } from 'react'
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from 'react-tweet'
import { fetchTweet, Tweet } from 'react-tweet/api'
import { kv } from '@vercel/kv'

async function getTweet(id, fetchOptions) {
    try {
      // Check if tweet is cached in localStorage
      const cachedTweet = localStorage.getItem(`tweet:${id}`);
      if (cachedTweet) {
        return JSON.parse(cachedTweet);
      }
  
      // Fetch tweet from API
      const { data, tombstone, notFound } = await fetchTweet(id, fetchOptions);
  
      if (data) {
        // Save to localStorage if data is found
        localStorage.setItem(`tweet:${id}`, JSON.stringify(data));
        return data;
      } else if (tombstone || notFound) {
        // Handle tweet deletion or privacy
        localStorage.removeItem(`tweet:${id}`);
      }
    } catch (error) {
      console.error('Fetching tweet failed:', error);
    }
  
    // Return undefined if no data found
    return undefined;
  }
  

const TweetPage = ({ id }) => {
  const [tweet, setTweet] = useState<Tweet | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedTweet = await getTweet(id)
        setTweet(fetchedTweet ?? null)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [id])

  if (error) {
    return <TweetNotFound error={error} />
  }

  return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetSkeleton />
}

const Page = ({ params }) => (
  <Suspense fallback={<TweetSkeleton />}>
    <TweetPage id={params.tweet} />
  </Suspense>
)

export default Page
