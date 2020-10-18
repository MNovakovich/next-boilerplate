import React, { useState } from 'react'
import Head from 'next/head'
import AppLayout from '../components/layouts/AppLayout'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {addCount} from '../store/count/action';
import Alert from '../components/alert';
import Avatar from '../components/avatar';

import { getAllPostsWithSlug } from '../lib/api'

export default function Home() {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  const [preview, setPreview ] = useState(true);
  const author = {
    firstName:'marko',
    avatar:{
      url:'https://a.espncdn.com/i/headshots/nba/players/full/3112335.png'
    }
  }
  return (
    <AppLayout className={styles.container}>
      <Head>
  <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="btn-blue" onClick={() => setPreview(false)}>
          Welcome toNext.js! {counter.count}
        </h1>
        <Avatar author={author} />
         
        
      </main>
      <Alert preview={preview} />
      
    </AppLayout>
  )
}
