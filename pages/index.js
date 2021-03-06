import { DataStore } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { Post } from '../src/models';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import PageBody from '../components/PageBody';
import { MobileBarTop, MobileBarBottom } from '../components/MobileBar';

export default function Home() {
  {/* How many characters of the post to display. Any posts that are too long will be truncated and have "Read More" link. */}
  const MAX_POST_LENGTH = 400;

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts().then();
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
        {
          posts.map(post => (
            <div key={post.id} className="pb-10">
              <p className="font-medium text-nice-orange">
                {post.month_year}
              </p>
              <Link href={`/posts/${post.id}`}>
                <a className="no-underline text-black hover:underline">
                  <h1 className="font-semibold">
                    {post.title}
                  </h1>
                </a>
              </Link>
              {/*
              Display whole article if less than 400 characters, or truncate with "..." and
              display "Read More" link if greater.
              */}
              {
                post.content.length > MAX_POST_LENGTH
                  ? <div>
                      <Markdown className="whitespace-pre-line py-5">
                        {`${post.content.substring(0, MAX_POST_LENGTH)}...`}
                      </Markdown>
                      <Link href={`/posts/${post.id}`}>
                        <a className="no-underline hover:underline">
                          Read More
                        </a>
                      </Link>
                    </div>
                  : <div>
                      <Markdown className="whitespace-pre-line py-5">
                        {post.content}
                      </Markdown>
                    </div>
              }
            </div>
          ))
        }
      </PageBody>
      <MobileBarBottom />
    </Layout>
  )
}
