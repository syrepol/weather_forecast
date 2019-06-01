import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { getPropSafe } from 'helpers';
import { t_getWeatherData } from 'redux/thunks';
import styles from './WeatherWidgetData.module.css';

const mapStateToProps = (state, ownProps) => ({
  weatherData: state.weather[ownProps.city]
});

const mapDispatchToProps = {
  getWeatherData: t_getWeatherData
};

export const _WeatherWidgetData = ({ sort, weatherData }) => {
  const preparedUnits = getPropSafe(
    () => weatherData.forecast.forecastday,
    []
  ).sort((a, b) => {
    switch (sort) {
      case 'date':
        return a.date_epoch - b.date_epoch;
      case 'min_temp':
        return a.day.mintemp_c - b.day.mintemp_c;
      case 'max_temp':
        return a.day.maxtemp_c - b.day.maxtemp_c;
      case 'avg_humidity':
        return a.day.avghumidity - b.day.avghumidity;
      default:
        return 0;
    }
  });

  return (
    <div className={styles.wrapper}>
      {
        preparedUnits.map((item) => (
          <div className={styles.dayBlock} key={item.date}>
            <div className={`${styles.header} truncate-text`}>
              {moment(item.date).format('ddd DD/MM/YY')}
            </div>
            <div className={styles.content}>
              <div className={`${styles.temp} truncate-text`}>
                <span className={styles.tempMax}>
                  {item.day.maxtemp_c}°
                </span>
                {' | '}
                <span className={styles.tempMin}>
                  {item.day.mintemp_c}°
                </span>
                {' C'}
              </div>
              <div className={styles.icon}>
                <img src={`http:${item.day.condition.icon}`} alt="" />
              </div>
              <div className={`${styles.condition} truncate-text`}>
                {item.day.condition.text}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export const WeatherWidgetData = connect(mapStateToProps, mapDispatchToProps)(_WeatherWidgetData);
