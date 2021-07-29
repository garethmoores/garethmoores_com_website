import React from 'react';
import { withSSRContext } from 'aws-amplify';
import { Post } from '../../src/models';
import Markdown from 'react-markdown';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import PageBody from '../../components/PageBody';
import { MobileBarBottom, MobileBarTop } from '../../components/MobileBar';

export default function PostComponent({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
      <Layout title={"GarethMoores.com: " + post.title} description={"GarethMoores.com: " + post.title}>
        <MobileBarTop />
        <Sidebar />
        <PageBody>
          <h1>{post.title}</h1>
          <Markdown className="py-8">{post.content}</Markdown>
        </PageBody>
        <MobileBarBottom />
      </Layout>
  )
}

export async function getStaticPaths(req) {
  const { DataStore } = withSSRContext(req)
  const posts = await DataStore.query(Post)
  const paths = posts.map(post => ({ params: { id: post.id }}))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(req) {
  const { DataStore } = withSSRContext(req)
  const { params } = req
  const { id } = params
  const post = await DataStore.query(Post, id)

  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    },
    revalidate: 1
  }
}
