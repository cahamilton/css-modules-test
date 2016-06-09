import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = { title: PropTypes.string.isRequired };

function Heading({ title }) {
  return (
    <header className={styles.column}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <pre>./assets/components/heading/index.js</pre>
        <pre>./assets/components/heading/styles.css</pre>
      </div>
    </header>
  );
}

Heading.propTypes = propTypes;

export default Heading;
