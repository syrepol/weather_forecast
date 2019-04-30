import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

import { WeatherWidgetBody } from './WeatherWidgetBody/WeatherWidgetBody';
import { WeatherWidgetControls } from './WeatherWidgetControls/WeatherWidgetControls';
import { t_getWeatherData } from 'redux/thunks';
import { countryOptions } from './countryOptions';

import styles from './WeatherWidget.module.css';


const mapDispatchToProps = {
  getWeatherData: t_getWeatherData
}

export const _WeatherWidget = ({ getWeatherData }) => {
  const defaultCity = 'london';
  const defaultSort = 'date';

  const [city, setCity] = useState(defaultCity);
  const [sort, setSort] = useState(defaultSort);

  // only didMount
  useEffect(() => {
    const parsedQuery = qs.parse(window.location.search);
    const matchedOption = countryOptions.find((option) => option.value === parsedQuery.city);

    if (parsedQuery.city && matchedOption) {
      const cityText = matchedOption.text || '';

      setCity(parsedQuery.city);
      document.title = `Weather for ${cityText}`
    } else {
      document.title = `Weather for ${defaultCity}`
      window.history.pushState({}, '', '/');
    }
  }, []);

  // didMount and on country change
  useEffect(() => {
    getWeatherData(
      city,
      {
        q: city,
        days: 7
      }
    )
  }, [city]);

  const onCityChange = (e, { value, options }) => {
    const optionText = options.find((option) => option.value === value).text;

    document.title = `Weather for ${optionText}`;
    window.history.pushState({}, ``, `?city=${value}`);
    setCity(value);
  }

  return (
    <div className={styles.wrapper}>
      <WeatherWidgetBody
        onCityChange={onCityChange}
        city={city}
        sort={sort}
      />
      <WeatherWidgetControls
        setSort={setSort}
        sort={sort}
      />
    </div>
  )
}

export const WeatherWidget = connect(null, mapDispatchToProps)(_WeatherWidget);
