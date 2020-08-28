import CustomSlider from 'components/extra/customslider/CustomSlider';
import React from 'react';
import styles from './AudioProgress.scss';

export default function AudioProgress() {
  return (
    <div>
      <CustomSlider
        className={styles.audioProgress}
        min={0}
        max={200}
        thumbImageUrl=""
        leftColor="#88b617"
        rightColor="#3c3d41"
      />
    </div>
  );
}
