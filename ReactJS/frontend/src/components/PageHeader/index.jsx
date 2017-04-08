
import React, { Component } from 'react';
import './index.css';

class PageHeader extends Component {

  render() {
    return (
        <div className="header">
            <p>{this.props.title}</p>
        </div>
    );
  }
}

export default PageHeader;
