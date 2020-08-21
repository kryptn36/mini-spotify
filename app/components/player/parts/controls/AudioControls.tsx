import React from 'react';
import styles from './AudioControls.scss';
import ToggleableButton from '../../../extra/toggleablebutton/ToggleableButton';

export default function AudioControls() {
  return (
    <div className={styles['audio-controls']}>
      <div className={styles['basic-controls']}>
        <i className="fas fa-2x fa-arrow-left" />
        <i className="far fa-3x fa-play-circle" />
        <i className="fas fa-2x fa-arrow-right" />
      </div>
      <div className={styles['flow-controls']}>
        <ToggleableButton
          element={
            <span>
              <i className="fas fa-lg fa-bars" />
            </span>
          }
          activeClass={styles.active}
          inactiveClass={styles.inactive}
        />
        <ToggleableButton
          element={
            <span>
              <i className="fas fa-lg fa-random" />
            </span>
          }
          activeClass={styles.active}
          inactiveClass={styles.inactive}
        />
        <ToggleableButton
          element={
            <span>
              <i className="fas fa-lg fa-sync-alt" />
            </span>
          }
          activeClass={styles.active}
          inactiveClass={styles.inactive}
        />
      </div>
      <div className={styles['extra-controls']}>
        <span>LYRICS</span>
        <span>
          ADD TO <i className="fas fa-plus" />
        </span>
      </div>
    </div>
  );
}
