import React, { useEffect, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import AppLayout from '../../components/layouts/AppLayout'

import { getAllPostsWithSlug, getPreviewPost} from '../../lib/api'

type Post = {
  author: string
  content: string
}
const Posts = ({posts}) => {
   
  

    return (
        <AppLayout>
           
            {
                 posts.map((post, index) => {
                    const {title, slug } = post.node;
                    return (
                        <div key={index}> 
                            <a href={`posts/${slug}`}>{title}</a>
                        </div>
                )
                })
            }
        </AppLayout>
    )
}
export const getStaticProps = async () => {
    const query = `{
        posts(first: 10000) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `;
    const headers = { 'Content-Type': 'application/json' }
    
    const res = await fetch('http://localhost/nextwp/graphql',{
        method:'POST',
        headers,
        body: JSON.stringify({
            query
            }),
    });

    const data = await res.json();
    const posts = data.data.posts.edges;
    
    return {
      props: {
        posts
      },
    }
  }

  
export default Posts
