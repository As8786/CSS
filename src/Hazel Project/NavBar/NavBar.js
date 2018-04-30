import React from "react";
import "./navBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navabar-content">
        <div className="responsive-menu">
            <i class="fas fa-bars"></i>
            <ul>
              <li className="dropdown">
                <a href="#"> HOME </a>
                
              </li>

              <li className="dropdown">
                <a href="#"> PAGES </a>
               
              </li>

              <li className="dropdown">
                <a href="#"> SHORTCODES </a>
                
              </li>

              <li className="dropdown">
                <a href="#"> PORTFOLIO </a>
              </li>
              <li className="dropdown">
                <a href="#"> BLOG </a>
              </li>
              <li className="dropdown">
                <a href="#"> SHOP </a>
              </li>
            </ul>
            </div>
          <div className="logo">
            <a href="#"> HAZEL </a>
          </div>

          <div className="links">
            <div className="menu">
            <ul>
              <li className="dropdown">
                <a href="#"> HOME </a>
                <ul>
                  <li>
                    <a href="#"> HOME V1</a>
                  </li>
                  <li>
                    <a href="#"> HOME V2</a>
                  </li>
                  <li>
                    <a href="#"> HOME V3</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="#"> PAGES </a>
                <ul>
                  <li>
                    <a href="#"> ABOUT </a>
                  </li>
                  <li>
                    <a href="#"> CONTACT </a>
                  </li>
                  <li>
                    <a href="#"> SERVICES </a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="#"> SHORTCODES </a>
                <ul>
                  <li>
                    <a href="#"> HOME V1</a>
                  </li>
                  <li>
                    <a href="#"> HOME V2</a>
                  </li>
                  <li>
                    <a href="#"> HOME V3</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="#"> PORTFOLIO </a>
              </li>
              <li className="dropdown">
                <a href="#"> BLOG </a>
              </li>
              <li className="dropdown">
                <a href="#"> SHOP </a>
              </li>
            </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
