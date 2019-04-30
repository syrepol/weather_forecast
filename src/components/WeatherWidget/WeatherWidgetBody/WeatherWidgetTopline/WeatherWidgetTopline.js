import React from 'react';
import { Select } from 'semantic-ui-react';
import { countryOptions } from '../../countryOptions';

import styles from './WeatherWidgetTopline.module.css';

export const WeatherWidgetTopline = ({ city, onCityChange }) => {
  return (
    <div className={styles.topline}>
      <Select
        placeholder='Select your country'
        options={countryOptions}
        value={city}
        onChange={onCityChange}
      />
    </div>
  )
}
