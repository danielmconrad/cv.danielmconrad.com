import React from 'react';

import Header from 'components/Header';
import Skills from 'components/Skills';
import Experience from 'components/Experience';
import Education from 'components/Education';

import styles from './App.css';

const App = () => (
  <div className={styles.App}>
    <Header />
    <Skills />
    <Experience />
    <Education />
  </div>
);

export default App;
