import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>Dan M Conrad</h1>
        <h2>Full Stack Engineer</h2>

        <a href="mailto:dan.m.conrad@gmail.com" target="_blank">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          dan.m.conrad@gmail.com
        </a>
        <a href="https://linkedin.com/in/danmconrad">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          linkedin.com/in/danmconrad
        </a>
        <a href="https://github.com/danmconrad">
          <i className="fa fa-github-alt" aria-hidden="true"></i>
          github.com/danmconrad
        </a>
      </header>
    );
  }
}

export default Header;
