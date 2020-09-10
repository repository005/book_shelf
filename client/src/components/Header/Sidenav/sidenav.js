import React from 'react';
import Sidenav from 'react-simple-sidenav';

export const SideNav = (props) => {
  return (
    <Sidenav
      showNav={props.showNav}
      onHideNav={() => props.onHideNav()}
      navStyle={{
        background: '#242424',
        maxWidth: '220px'
      }}
    >
      Items
    </Sidenav>
  )
}
