  
import React, { ReactNode } from 'react'
import Navbar from '../navbar/navbar';
import { Layout, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

type Props = {
  children: ReactNode
  title?: string
}

export default function AppLayout({children}: Props) {
  return (
    <>
   
    <Layout>
      <Layout>
        <Navbar />
        <Header>
          <div className="header-wrapp" style={{display:'flex', justifyContent:'center'}}>
               <h3 style={{color:'#fff'}}>S7Code&Design</h3>
          </div>
        </Header>
        <Content className="main">
            {children}
        </Content>
        <Footer
           style={{background:'#001529', color:'#fff'}}
        >Footer</Footer>
      </Layout>
    </Layout>
    <style jsx global>{`
       .main {
         min-height:90vh;
         padding:10px;
       }
    
    `}</style>
  </>
  )
}