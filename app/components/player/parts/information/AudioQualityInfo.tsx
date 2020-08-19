import React from 'react';
import styles from './AudioInfo.scss';

interface QualityInfoPros {
  bitrate: number;
  frequency: number;
}

export default function AudioQualityInfo(props: QualityInfoPros) {
  const { bitrate, frequency } = props;

  return (
    <div>
      <span className={styles['audio-quality-number']}>{bitrate}</span>
      &nbsp;
      <span className={styles['audio-quality-unit']}>kbps</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles['audio-quality-number']}>{frequency}</span>
      &nbsp;
      <span className={styles['audio-quality-unit']}>kHz</span>
    </div>
  );
}
