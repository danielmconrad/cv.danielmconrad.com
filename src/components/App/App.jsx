import React from 'react';

import Header from 'components/Header';
import Profile from 'components/Profile';
import Skills from 'components/Skills';
import Experience from 'components/Experience';
import Education from 'components/Education';

import styles from './App.css';

const App = () => (
  <div className={styles.App}>
    <Header />
    <Profile />
    <Skills />
    <Experience />
    <Education />
  </div>
);

export default App;
