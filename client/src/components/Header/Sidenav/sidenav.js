import React from 'react';
import Sidenav from 'react-simple-sidenav';
import { SideNavItems } from './sidenav_items';

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
      <SideNavItems />
    </Sidenav>
  )
}
