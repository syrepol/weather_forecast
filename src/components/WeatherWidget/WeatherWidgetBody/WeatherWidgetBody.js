import React from 'react';

import { WeatherWidgetTopline } from './WeatherWidgetTopline/WeatherWidgetTopline';
import { WeatherWidgetData } from './WeatherWidgetData/WeatherWidgetData';

import styles from './WeatherWidgetBody.module.css';


export const WeatherWidgetBody = ({ onCityChange, city, sort }) => {
  return (
    <div className={styles.wrapper}>
      <WeatherWidgetTopline
        onCityChange={onCityChange}
        city={city}
      />
      <WeatherWidgetData
        city={city}
        sort={sort}
      />
    </div>
  )
}


