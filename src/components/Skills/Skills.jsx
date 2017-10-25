import React from 'react';
import styles from './Skills.css';
import data from 'data/skills';

const allSkills = [].concat(...Object.values(data));

const Skills = () => (
  <div className={styles.Skills}>
    <h3>Tech</h3>
    <div className={styles.skills}>
      {allSkills.map((skill, i) =>
        <span key={i} className={styles.skill}>{skill}</span>
      )}
    </div>
  </div>
);

export default Skills;
