import React from 'react';
import PropTypes from 'prop-types';
import DateRange from 'components/DateRange';
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
    <DateRange
      className={styles.dateRange}
      formattedStart={startDate}
      formattedEnd={endDate}
    />
  </div>
);

EducationItem.propTypes = {
  description: PropTypes.string,
  endDate: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.string
};

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
