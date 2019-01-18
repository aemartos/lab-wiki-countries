import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">{this.props.title}</a>
        </div>
      </nav>
    );
  }
}
