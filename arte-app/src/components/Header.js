import React from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import MenuItem from './MenuItem';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }

  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  render() {
    return (
      <div className="header">
        <div className="header-logo">Arte</div>
        <div className="header-menu">
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='#1D1D1D'/>
        </div>
        <Menu open={this.state.menuOpen}>
          <Link to="/">
            <MenuItem key={0} onClick={()=>{this.handleLinkClick();}}>Home</MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem key={1} onClick={()=>{this.handleLinkClick();}}>About</MenuItem>
          </Link>
          <Link to="/archive">
            <MenuItem key={2} onClick={()=>{this.handleLinkClick();}}>Archive</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem key={3} onClick={()=>{this.handleLinkClick();}}>Login</MenuItem>
          </Link>
          <Link to="/signup">
            <MenuItem key={4} onClick={()=>{this.handleLinkClick();}}>Signup</MenuItem>
          </Link>
          <Link to="/logout">
            <MenuItem key={5} onClick={()=>{this.handleLinkClick();}}>Logout</MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem key={6} onClick={()=>{this.handleLinkClick();}}>Profile</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Header;
