import React from 'react';

import styles from './Education.css';
import data from 'data/education';

const EducationItem = ({ description, endDate, location, startDate }) => (
  <div className={styles.EducationItem}>
    <div className={styles.location}>
      {location}
    </div>
    <span className={styles.description}>
      {description}
    </span>
    <span className={styles.dateRange}>
      {startDate} – {endDate}
    </span>
  </div>
);

const Education = () => (
  <div className={styles.Education}>
    <h3>Education</h3>

    <div>
      {data.map((ed, i) => (
        <EducationItem
          key={i}
          description={ed.description}
          endDate={ed.endDate}
          location={ed.location}
          startDate={ed.startDate}
        />
      ))}
    </div>
  </div>
);

export default Education;
