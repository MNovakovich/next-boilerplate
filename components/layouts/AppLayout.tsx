  
import React, { ReactNode } from 'react'
import Navbar from '../navbar/navbar';


type Props = {
  children: ReactNode
  title?: string
}

export default function AppLayout({children}: Props) {
  return (
    <>
     {children }   
   </>
  )
}