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
                            <Link href={`posts/${slug}`}>
                              <a >{title}</a>
                            </Link>
                        </div>
                )
                })
            } 
        </AppLayout>
    )
}
export const getStaticProps = async () => {
   const posts = await getAllPostsWithSlug();
    
    return {
      props: {
        posts:posts.edges
      },
    }
  }

  
export default Posts
