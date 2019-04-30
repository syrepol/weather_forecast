import React from 'react';
import { WeatherWidget } from 'components/WeatherWidget';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.App}>
      <div className="container">
        <WeatherWidget />
      </div>
    </div>
  );
}
