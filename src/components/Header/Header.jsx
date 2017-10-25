import React from 'react';
import Icon from 'components/Icon';
import styles from './Header.css';

const Header = (props) => (
  <div className={styles.Header}>
    <div className={styles.contact}>
      <h1 className={styles.name}>Dan M Conrad</h1>
      <h2 className={styles.title}>Full Stack Engineer</h2>

      <div className={styles.socialLinks}>
        <div className={styles.socialLink}>
          <Icon type="google" className={styles.icon} />
          <strong>danmconrad</strong><ins>@gmail.com</ins>
        </div>
        <div className={styles.socialLink}>
          <Icon type="linkedin" className={styles.icon} />
          <ins>linkedin.com/in/</ins><strong>danmconrad</strong>
        </div>
        <div className={styles.socialLink}>
          <Icon type="github" className={styles.icon} />
          <ins>github.com/</ins><strong>danmconrad</strong>
        </div>
        <div className={styles.socialLink}>
          <Icon type="medium" className={styles.icon} />
          <ins>medium.com/@</ins><strong>danmconrad</strong>
        </div>
      </div>
    </div>
    <div className={styles.profile}>
      <p>
        I'm a lifelong technology enthusiast, software fanatic, and overall computer dork.
      </p>
      <p>
        <strong>Professionally</strong>, I'm a full stack engineer and strong technical leader with a focus on lean and agile approaches to solving today's product challenges. I have a wide range of experience and an innate ability to quickly identify underlying business requirements to build efficient, scalable, and secure web architectures. I have an extremely vigilant eye for design implementation and adherence to web best-practices, accompanied by a drive to construct team coding standards.
      </p>
      <p>
        <strong>Personally</strong>, I'm a tinkerer, foodie, and volunteer. I spend most of my free time woodworking and building furniture, hacking together robots and random electronics, making cheese and experimenting with new cooking techniques, and teaching kids how to code.
      </p>
    </div>
  </div>
);

export default Header;
