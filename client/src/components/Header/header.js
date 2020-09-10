import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { SideNav } from './Sidenav/sidenav';

export const Header = () => {

  const [showNav, setShowNav] = useState(false);
  
  const hideNav = () => {
    setShowNav(false);
  }

  return (
    <header>
      <div className="open_nav">
        <FontAwesome 
          name="bars" 
          style={{
            color: '#ffffff',
            padding: '10px',
            cursor: 'pointer'
          }}
          onClick={() => {
            setShowNav(true);
          }}
        />
      </div>
      <SideNav showNav={showNav} onHideNav={() => hideNav()}/>
      <Link to="/" className="logo">
        The Book Shelf
      </Link>
    </header>
  )
}
