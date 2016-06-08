import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import styles from './stylesheets/screen.css';

import Heading from './components/Heading/index';
import Main from './components/Main/index';
import Sidebar from './components/Sidebar/index';

function App() {
  return (
    <div className={styles.container}>
      <Heading title="Hello World!" />

      <Main title="Local CSS is Awesome" />

      <Sidebar
        title="React is Cool"
        paragraph="Let's override some default props..."
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
