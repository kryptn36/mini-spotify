import styled from 'styled-components';
import ToggleableButton from 'components/extra/toggleablebutton/ToggleableButton';
import React from 'react';

export const AudioControlsContainer = styled.div`
  display: flex;
  width: 94%;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding-top: 16px;
`;

export const FlowControlsContainer = styled.div`
  & > * {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const ExtraControlsContainer = styled.div`
  & > * {
    margin-left: 20px;
    font-size: 0.6em;
    font-weight: 600;
  }
`;

export const BasicControlsContainer = styled.div`
  & > * {
    margin-left: 7px;
    margin-right: 7px;
  }

  & > div {
    width: 100%;
  }

  & > i:nth-child(1),
  i:nth-child(3) {
    position: relative;
    bottom: 5px;
  }
`;

export const FlowControlButton = styled(ToggleableButton).attrs(() => ({
  activeClass: 'active',
}))`
  margin-left: 5px;
  margin-right: 1px;

  &.active {
    color: #a5e30b;
    text-shadow: 0px 0px 5px #a5e30b;
    margin-left: 5px;
    margin-right: 1px;
  }
`;

export const FaBars = (
  <span>
    <i className="fas fa-lg fa-bars" />
  </span>
);

export const FaRandom = (
  <span>
    <i className="fas fa-lg fa-random" />
  </span>
);

export const FaSyncAlt = (
  <span>
    <i className="fas fa-lg fa-sync-alt" />
  </span>
);
