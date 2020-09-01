import React from 'react';
import AudioQualityInfo from './AudioQualityInfo';
import SongCaption from './SongCaption';
import {
  PositionSlider,
  VolumeSlider,
  ControlsContainer,
  QualityContainer,
  ImageContainer,
  MainContainer,
  AudioInfoContainer,
  AudioModeButton,
  BoxButton,
} from './AudioInfo.styles';

export default function AudioInfo() {
  return (
    <AudioInfoContainer>
      <ImageContainer>
        <img
          alt="song cover"
          src="https://i.scdn.co/image/ab67616d00001e0249e3b7e85829da2fbc68bc46"
        />
      </ImageContainer>
      <MainContainer>
        <div>
          <SongCaption
            artist="MANTRA"
            title="Bring Me The Horizonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
          />
        </div>
        <QualityContainer>
          <div>
            <AudioQualityInfo bitrate={320} frequency={44} />
          </div>
          <div>
            <AudioModeButton element={<span>mono</span>} />
            <AudioModeButton element={<span>stereo</span>} />
          </div>
        </QualityContainer>
        <ControlsContainer>
          <div>
            <VolumeSlider min={0} max={100} />
          </div>
          <div>
            <PositionSlider min={0} max={100} snapChunks={3} />
          </div>
          <div>
            <BoxButton element={<span>EQ</span>} />
            <BoxButton element={<span>PL</span>} />
          </div>
        </ControlsContainer>
      </MainContainer>
    </AudioInfoContainer>
  );
}
