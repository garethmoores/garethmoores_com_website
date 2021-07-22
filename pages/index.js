import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Post } from '../src/models'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const postData = await DataStore.query(Post)
      setPosts(postData)
    }
    const subscription = DataStore.observe(Post).subscribe(() => fetchPosts())
    return () => subscription.unsubscribe()
  }, [])
  
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-xl">Posts</h1>
      {
        posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <a>
              <p className="text-center">{post.title}</p>
            </a>
          </Link>
        ))
      }
    </div>
  )
}
