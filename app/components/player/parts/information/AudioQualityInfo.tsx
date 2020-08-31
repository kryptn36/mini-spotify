import React from 'react';
import { QualityUnit, QualityNumber } from './AudioQualityInfo.styles';

interface QualityInfoPros {
  bitrate: number;
  frequency: number;
}

export default function AudioQualityInfo(props: QualityInfoPros) {
  const { bitrate, frequency } = props;

  return (
    <div>
      <QualityNumber>{bitrate}</QualityNumber>
      &nbsp;
      <QualityUnit>kbps</QualityUnit>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <QualityNumber>{frequency}</QualityNumber>
      &nbsp;
      <QualityUnit>kHz</QualityUnit>
    </div>
  );
}
