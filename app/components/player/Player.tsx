import React from 'react';
import AudioProgress from './parts/progress/AudioProgress';
import AudioControls from './parts/controls/AudioControls';
import AudioInfo from './parts/information/AudioInfo';

export default function Player() {
  return (
    <div>
      <AudioInfo />
      <AudioProgress />
      <AudioControls />
    </div>
  );
}
