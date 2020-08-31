import React from 'react';
import { TimelineSlider } from './AudioProgress.styles';

export default function AudioProgress() {
  return (
    <div>
      <TimelineSlider min={0} max={200} />
    </div>
  );
}
