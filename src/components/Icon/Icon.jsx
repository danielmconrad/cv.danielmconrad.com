import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Icon.css';
import medium from './assets/medium.png';
import rt from './assets/rt.png';
import google from './assets/google.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import resume from './assets/resume.png';

const images = {
  medium,
  rt,
  google,
  linkedin,
  github,
  resume
};

const Icon = (props) => (
  <img
    className={cx(styles.Icon, props.className)}
    src={images[props.type]}
    alt={props.type}
  />
);

Icon.propTypes = {
  className: PropTypes.string
};

export default Icon;
