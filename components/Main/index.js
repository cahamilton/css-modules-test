import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
};

const defaultProps = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, culpa eaque eos ipsam.',
};

function Main({ title, paragraph }) {
  return (
    <main className={styles.column}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{paragraph}</p>
        <pre>./assets/components/main/index.js</pre>
        <pre>./assets/components/main/styles.css</pre>
      </div>
    </main>
  );
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
