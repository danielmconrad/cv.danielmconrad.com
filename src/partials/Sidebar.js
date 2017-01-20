import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

  onClickPrint() {
    print();
  }

  render() {
    return (
      <div className="Sidebar">
        <a
          title="Print"
          className="action action-print"
          onClick={this.onClickPrint}
        >
          <i className="fa fa-print" aria-hidden="true"></i>
        </a>
        <a
          title="Download PDF"
          className="action action-download"
          href="docs/dan-m-conrad.pdf"
          download="dan-m-conrad.pdf"
        >
          <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}

export default Sidebar;
