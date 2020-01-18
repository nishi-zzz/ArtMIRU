import React from 'react';

import image from '../image/menu.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">Arte</div>
        <div className="header-menu">
          <img src={image} alt='humberger'/>
        </div>
      </div>
    );
  }
}

export default Header;
