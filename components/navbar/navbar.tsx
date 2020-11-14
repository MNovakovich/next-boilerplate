import React, {useState} from 'react'
import Link from 'next/link'



const Navbar = () => {

  const [ collapsed, setCollapsed] = useState(true)
  

  const toggleCollapsed = () => {
    const currentCollapsed = !collapsed;
    setCollapsed( currentCollapsed );
  };

 
    return (
      <div>
      
        <div className="overlay" onClick={() => setCollapsed(true)} style={{display: collapsed? 'none': 'block'}}></div>
        <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
      <style jsx global>{`
        .navbar-mobile {
          width:300px;
          z-index:100;
          position:absolute;
        }
        .overlay {
          background:#cccc;
          position:absolute;
          top:0;
          width:100vw;
          z-index:-1;
          height:100%;
          min-height:100vh;
        }
        .ant-menu-inline-collapsed {
          width:0;
        }
      `}</style>
     
      </div>
    );
  
}


export default Navbar