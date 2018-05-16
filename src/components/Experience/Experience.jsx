import React from 'react';
import PropTypes from 'prop-types';
import DateRange from 'components/DateRange';
import styles from './Experience.css';
import data from 'data/experience';

const ExperienceItem = (props) => (
  <div className={styles.ExperienceItem}>
    <div className={styles.title}>
      {props.title}
    </div>
    <div className={styles.company}>
      {props.company}
      <DateRange
        className={styles.dateRange}
        start={props.startDate}
        end={props.endDate}
      />
      <div>{props.description}</div>
    </div>
    <div className={styles.projects}>
      {props.projects && props.projects.map((project, i) => (
        <div key={i} className={styles.project}>
          <div>
            <span className={styles.projectName}>{project.name}</span>
            <span className={styles.projectTech}>{project.technologies.join(', ')}</span>
          </div>
          <div className={styles.projectDesc}>
            {project.description.split('\n\n').map((str, i) => <p key={i}>{str}</p>)}
          </div>
        </div>
      ))}
    </div>
    <div className={styles.awards}>
      {props.awards && props.awards.map((award, i) => (
        <div key={i} className={styles.award}>
          <em>{award.name}</em> – {award.description}
        </div>
      ))}
    </div>
  </div>
);

ExperienceItem.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string)
  })),
  awards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }))
}

const Experience = () => (
  <div className={styles.Experience}>
    <h3>Experience</h3>

    <div>
      {data.map((item, i) => (
        <ExperienceItem key={i} {...item} />
      ))}
    </div>
  </div>
);

export default Experience;
