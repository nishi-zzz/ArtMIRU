import React from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { useAuth0 } from "../react-auth0-spa";


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

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
      <div className="header">
        <a className="header-logo" href='/home'>ArtMIRU</a>
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
          <Link to="/profile">
            <MenuItem key={3} onClick={()=>{this.handleLinkClick();}}>Profile</MenuItem>
          </Link>
          <div>
          {!isAuthenticated && (
            <MenuItem key={4} onClick={()=>{this.handleLinkClick();loginWithRedirect({});}}>Log in</MenuItem>
          )}
          {isAuthenticated && <MenuItem key={5} onClick={()=>{this.handleLinkClick();}}>Profile</MenuItem>}
          {isAuthenticated && <MenuItem key={6} onClick={()=>{this.handleLinkClick();logout();}}>Log out</MenuItem>}
          </div>
        </Menu>
      </div>
    );
  }
}

export default Header;
