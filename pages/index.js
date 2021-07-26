import { DataStore } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Post } from '../src/models';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';
import { MobileBarTop, MobileBarBottom } from '../components/MobileBar';

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
      <Layout title="GarethMoores.com" description="GarethMoores.com">
        <MobileBarTop />
        <Sidebar />
          <PageBody>
            <h1 className="text-center text-xl">
              Posts
            </h1>
            {
              posts.map(post => (
                  <Link key={post.id} href={`/posts/${post.id}`}>
                    <a>
                      <p className="text-center">
                        {post.title}
                      </p>
                    </a>
                  </Link>
              ))
            }
          </PageBody>
        <MobileBarBottom />
      </Layout>
  )
}
