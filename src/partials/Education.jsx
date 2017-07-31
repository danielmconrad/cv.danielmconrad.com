import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <section className="Work Education">
        <h3>Education</h3>

        <div className="job">
          <div className="position">The Internet</div>
          <div className="company">Giving credit where credit is due.</div>
          <div className="date">Circa 1997 – Present</div>
        </div>

        <div className="job">
          <div className="position">University of Illinois at Chicago</div>
          <div className="company">College of Business Administration</div>
          <div className="date">Aug 2005 – Jun 2010</div>
        </div>
      </section>

    );
  }
}

export default Education;
