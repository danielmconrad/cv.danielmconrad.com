import React from 'react';
import fecha from 'fecha';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './DateRange.css';

const parseDate = (date, inputFormat) =>
  date instanceof Date ? date : fecha.parse(date, inputFormat);

const formatDate = (date, props) =>
  date == null ? 'Present' : fecha.format(parseDate(date, props.inputFormat), props.outputFormat);

const formatStart = (props) =>
  props.formattedStart || formatDate(props.start, props);

const formatEnd = (props) =>
  props.formattedEnd || formatDate(props.end, props);

const DateRange = (props) => (
  <span className={cx(styles.DateRange, props.className)}>
    {formatStart(props)} – {formatEnd(props)}
  </span>
);

DateRange.propTypes = {
  className: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  formattedStart: PropTypes.string,
  formattedEnd: PropTypes.string,
  inputFormat: PropTypes.string,
  outputFormat: PropTypes.string
};

DateRange.defaultProps = {
  inputFormat: 'YYYY-MM',
  outputFormat: 'MMM YYYY'
};

export default DateRange;
