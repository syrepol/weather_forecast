import React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './WeatherWidgetControls.module.css';

export const WeatherWidgetControls = ({ sort, setSort }) => {
  const onSortClick = (e) => {
    const { val } = e.target.dataset;

    setSort(val);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sort by</div>
      <Button.Group>
        <Button
          data-val='date'
          className={classNames({ [styles.active]: sort === 'date' })}
          onClick={onSortClick}
        >
          Date
        </Button>
        <Button
          data-val='min_temp'
          className={classNames({ [styles.active]: sort === 'min_temp' })}
          onClick={onSortClick}
        >
          Min temperature
        </Button>
        <Button
          data-val='max_temp'
          className={classNames({ [styles.active]: sort === 'max_temp' })}
          onClick={onSortClick}
        >
          Max temperature
        </Button>
        <Button
          data-val='avg_humidity'
          className={classNames({ [styles.active]: sort === 'avg_humidity' })}
          onClick={onSortClick}
        >
          Average humidity
        </Button>
      </Button.Group>
    </div>
  )
}
