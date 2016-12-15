import React, { Component } from 'react';
import './Work.css';

class Work extends Component {
  render() {
    return (
      <section className="Work">
        <h3>Experience</h3>

        {/* Groupon */}

        <div className="job">
          <div className="meta">
            <div className="position">Senior Software Engineer (SDE III) - Full Stack / Front End</div>
            <div className="company">Groupon Inc.</div>
            <div className="date">Apr 2014 - Present</div>
          </div>

          <div className="project">
            <div className="title">Groupon.com</div>
            <div className="tech">Node.js, Backbone.js, CoffeeScript, HTML5, CSS3,
            Splunk</div>
            <div className="description">
              <p>As tech lead on the most visible portions of Groupon.com, contributed,
              maintained, and supported multiple applications and services within the
              global architecture. Progessively restructured and upgraded legacy
              applications and shared modules.</p>
            </div>

            <div className="title">Product</div>
            <div className="description">
              <p>Along with extracting product requirements
              through the use of User Story Mapping and other Agile/Lean methodologies,
              conducted dozens of multivariate tests to determine the efficacy of
              those features.</p>
            </div>

            <div className="title">App/Dev Opps</div>
            <div className="description">
              <p>Drove the overall decrease in latency
              of multiple applications by overhauling monitoring and app ops
              strategies. Wrote several modules to streamline the CI/dev process,
              thereby increasing the team's velocity by more than 100% over the course
              of 3 months.</p>
            </div>

            <div className="title">Leadership</div>
            <div className="description">
              <p>Along with leading a team of distributed
              and local developers, formally mentored several developers and interns.
              Performed dozens of technical interviews to continually grow the Groupon
              dev community. Implemented several procedural strategies, such as paired
              programming and true test-driven development to ensure knowledge share
              within the team.</p>

              <p><em>Swag Award Winner, Q1 2016</em> - An award given to the most
              dedicated, effective, and influential product developer.</p>
            </div>
          </div>
        </div>


        {/* Kaplan */}

        <div className="job">
          <div className="meta">
            <div className="position">Senior Front-End Developer</div>
            <div className="company">Kaplan Higher Education</div>
            <div className="date">Dec 2012 - Apr 2014</div>
          </div>

          <div className="project">
            <div className="title">Qualified</div>
            <div className="tech">Node.js, Ember.js, HTML5, CSS3, MySQL</div>
            <div className="description">
              <p>Architected and built out a robust one-page app for the front-end
              portion of the larger n-tier platform. The application used many
              third-party technologies to quickly bootstrap the desired functionality;
              several were incrementally replaced with custom code. All CRUD
              functionality was proxied back to a separate API using Ember Data.</p>

              <p>Worked heavily with DB stored procedures and data model structure for
              new feature development. Began conversion of the middle tier to Node.js
              from Symfony (PHP). Set up OAuth 2.0 as well as a model interaction
              layer for communication to the database.</p>
            </div>
          </div>

          <div className="project">
            <div className="title">Other Achievements and Duties</div>
            <div className="description">
              <p>Performed standard Scrum Master duties, including ameliorating
              impediments, scheduling and running meetings, and communicating to
              product owners.</p>

              <p>Defined and documented a regimented code branching process based on
              the Gitflow Workflow. Implemented a continual integration method of
              building the frontend codebase.</p>

              <p>Created and managed development environments using Vagrant and
              VirtualBox to allow multi-platform support (Window, Mac, &amp;
              Linux).</p>
            </div>
          </div>
        </div>


        {/* AlphaMetrix */}

        <div className="job">
          <div className="meta">
            <div className="position">Intermediate Software Developer </div>
            <div className="company">AlphaMetrix LLC</div>
            <div className="date">Dec 2009 - Dec 2012</div>
          </div>

          <p>Involved in all aspects of the enterprise-level software development
          process, including business requirement consultation, development,
          delegation of work, mentoring of junior developers, application deployment
          automation, quality assurance &amp; user acceptance, support, documentation,
          and bug tackling.</p>

          <div className="project">
            <div className="title">"Alpha" Client Framework</div>
            <div className="tech">JS, C#</div>
            <div className="description">
              <p>Architected a replacement JavaScript framework based on the Module
              pattern and JavaScript inheritance (similar to but easier to maintain
              than Backbone) to mirror server control schema to allow for complete
              user interaction on client side.</p>

              <p>Designed an intricate "Event" processor to allow for tighter server
              and client communication through AJAX and Comet. Taught out-of-state
              junior developers how to implement the framework as well as how to
              extend it.</p>
            </div>
          </div>

          <div className="project">
            <div className="title">AlphaMetrix Global Marketplace</div>
            <div className="tech">ASP.NET, C#, T-SQL, JS, CSS3</div>
            <div className="description">
              <p>Incorporated Project Platypus (see below), heavy content management
              and user authentication/permissioning. Real-time data queried through
              complex caching schemas. Created user defined functions and stored
              procedures to access real- time data for both financial information and
              social networking data. Familiar with entirety of nearly one million
              line codebase. Created automated build scripts with MSBuild for
              minification of CSS and JavaScript.</p>
            </div>
          </div>

          <div className="project">
            <div className="title">Project Platypus</div>
            <div className="tech">ASP.NET, C#, T-SQL, JS, CSS3</div>
            <div className="description">
              <p>Made custom Web Controls that wrapped Telerik RadControls as well as
              strictly defined Mustache based HTML controls, designed around the
              Abstract Factory pattern. Helped create server side logic of this
              presentation platform for use in multiple web applications. Solely wrote
              complex CSS for over 40 Web Controls. Co-wrote complex JavaScript for
              all controls, including, but not limited to property assignment, input
              validation, and AJAX reloading of server controls.</p>
            </div>
          </div>

          <div className="project">
            <div className="title">Intranet</div>
            <div className="tech">WordPress, Window Active Directory, JS, CSS</div>
            <div className="description">
              <p>Created an internal website for interdepartmental communication and
              storage of information and documents. "Dashboard" contained important
              stats and figures for C-level staff. Created automated utilities for
              generation of business documents using CMS templates.</p>
            </div>
          </div>

          <div className="project">
            <div className="title">AlphaMetrix.com</div>
            <div className="tech">WordPress, Microsoft CRM, T-SQL</div>
            <div className="description">
              <p>Originally hired as a WordPress developer, working in Linux. Migrated
              legacy Red Hat systems to Debian. Made 6+ major iterations of the
              corporate site, complete with content management. Created an integrated
              login process between WordPress and Microsoft Dynamics CRM 4. Made
              jQPlot based graphs, an open-source JavaScript charting package, with
              on-demand data from web services that connected to T-SQL Stored
              Procedures.</p>
            </div>
          </div>
        </div>


        {/* Pander Commander */}

        <div className="job">
          <div className="meta">
            <div className="position">CTO, Co-Founder</div>
            <div className="company">Pander Commander LLC</div>
            <div className="date">Apr 2012 - Mar 2013</div>
          </div>

          <div className="project">
            <div className="title">Partynaut</div>
            <div className="tech">PHP, HTML 5, JS, CSS3</div>
            <div className="description">
              <p>Complete Data Model design, server framework design as well as client
              framework design. Established connections to Facebook Graph API and
              Google Maps API for use in core business. Full development environment
              setup including the installation and configuration of GIT for versioning
              control, respective IDE's for technology chosen for each developer
              (Mac or PC). Created an N-tier architecture using the MVC design
              paradigm to segregate data, business logic, and presentation. Using
              sprites for CSS image background management, jQuery UI for client
              controls, and Mustache (with Handlebars extension) for page
              templating.</p>
            </div>
          </div>
        </div>


        {/* Snowpiper */}

        <div className="job">
          <div className="meta">
            <div className="position">Partner, Project Manager</div>
            <div className="company">Snowpiper Solutions LLP</div>
            <div className="date">Jul 2007 – Jun 2011</div>
          </div>

          <div className="project">
            <div className="title">20+ Websites</div>
            <div className="tech">JS, XHTML/HTML 4.1, CSS3, WordPress, PHP, ActionScript,
            Flash</div>
            <div className="description">
              <p>Used open-source technologies to implement elegant websites.
              Solutions were documented, both CSS and XHTML validated, and often
              incorporated CMS solutions appropriate for the task at hand.</p>

              <p>Established a financial base to allow growth. Formed a standard
              operating model to unify procedures, increase efficiency and reduce
              risk of delays in client deliverables. Hired subcontractors in response
              to increased demand of company's services. Created service proposals
              and service agreements to secure clientele.</p>
            </div>
          </div>
        </div>


        {/* Lopez */}

        <div className="job">
          <div className="meta">
            <div className="position">Accounting / Tax Intern</div>
            <div className="company">Lopez &amp; Company</div>
            <div className="date">Feb 2009 – Dec 2009</div>
          </div>

          <div className="project">
            <div className="description">
              <p>Assisted in restructuring of operations for clientele. Processed and
              analyzed monthly financial statements and translated figures into
              clients' legers. Filed Business and Personal tax returns and
              extensions.</p>
            </div>
          </div>
        </div>


        {/* Best Buy */}

        <div className="job">
          <div className="meta">
            <div className="position">Business Technology Professional</div>
            <div className="company">Best Buy Inc.</div>
            <div className="date">Dec 2005 – Jul 2007</div>
          </div>

          <div className="project">
            <div className="description">
              <p>Employee of the Month &amp; 'MVP'. Top ranked attendee of the 'High
              Potential Class'. Built long-standing business relationships resulting
              in improved store rank. Doubled weekly new-business-customer count by
              participation in community networking events via Lincoln Park Chamber of
              Commerce. Prepared estimates and business proposals for prospective
              clients. Constructed bottom-line solutions through hourly analysis of
              profit and loss reports.</p>
            </div>
          </div>
        </div>


        {/* Kubasiak */}

        <div className="job">
          <div className="meta">
            <div className="position">Network Administrator</div>
            <div className="company">Kubasiak, Fylstra, Reizen &amp; Rotunno, P.C.</div>
            <div className="date">Nov 2004 – Aug 2005</div>
          </div>

          <div className="project">
            <div className="description">
              <p>Created proposals for new technology to increase office efficiency.
              Solely supported a 45+ user MS Exchange Network. Serviced several office
              electronics such as fax and copy machines.</p>
            </div>
          </div>
        </div>

      </section>

    );
  }
}

export default Work;
