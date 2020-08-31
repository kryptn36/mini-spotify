import React from 'react';
import {
  AudioControlsContainer,
  FlowControlsContainer,
  BasicControlsContainer,
  ExtraControlsContainer,
  FlowControlButton,
  FaSyncAlt,
  FaBars,
  FaRandom,
} from './AudioControls.styles';

export default function AudioControls() {
  return (
    <AudioControlsContainer>
      <BasicControlsContainer>
        <i className="fas fa-2x fa-arrow-left" />
        <i className="far fa-3x fa-play-circle" />
        <i className="fas fa-2x fa-arrow-right" />
      </BasicControlsContainer>
      <FlowControlsContainer>
        <FlowControlButton element={FaBars} />
        <FlowControlButton element={FaRandom} />
        <FlowControlButton element={FaSyncAlt} />
      </FlowControlsContainer>
      <ExtraControlsContainer>
        <span>LYRICS</span>
        <span>
          ADD TO <i className="fas fa-plus" />
        </span>
      </ExtraControlsContainer>
    </AudioControlsContainer>
  );
}
