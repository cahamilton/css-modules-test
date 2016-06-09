import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
};

const defaultProps = {
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nisi odio ' +
  'perferendis quam temporibus ullam!',
};

function Sidebar({ title, paragraph }) {
  return (
    <aside className={styles.column}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{paragraph}</p>
        <pre>./assets/components/sidebar/index.js</pre>
        <pre>./assets/components/sidebar/styles.css</pre>
      </div>
    </aside>
  );
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
