import CustomSlider from 'components/extra/customslider/CustomSlider';
import arrows from 'img/arrows-alt-h-solid.png';
import volumeUp from 'img/volume-up-solid.png';
import styled from 'styled-components';
import ToggleableButton from 'components/extra/toggleablebutton/ToggleableButton';

export const VolumeSlider = styled(CustomSlider).attrs(() => ({
  leftColor: '#88b617',
  rightColor: '#3c3d41',
  thumbImageUrl: volumeUp,
}))`
  width: 98%;
`;

export const PositionSlider = styled(CustomSlider).attrs(() => ({
  leftColor: '#3c3d41',
  rightColor: '#3c3d41',
  thumbImageUrl: arrows,
}))`
  width: 68%;
  margin-left: 20px;
`;

export const AudioInfoContainer = styled.div`
  display: flex;
  width: 94%;
  align-items: center;
  margin: auto;
  padding-top: 16px;
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 27%;

  img {
    border-radius: 3px;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const MainContainer = styled.div`
  width: calc(73% - 25px);
  height: 100%;
  margin-left: 25px;

  & > div {
    margin-bottom: 11px;
  }
`;

export const QualityContainer = styled.div`
  & > div {
    display: inline-block;
    width: 50%;

    &:nth-child(1) {
      text-align: left;
    }
    &:nth-child(2) {
      text-align: right;
    }
  }
`;

export const ControlsContainer = styled.div`
  & > div {
    float: left;

    &:nth-child(1) {
      text-align: left;
      width: 40%;
    }
    &:nth-child(2) {
      text-align: center;
      width: 30%;
    }
    &:nth-child(3) {
      text-align: right;
      width: 30%;
    }
  }
`;

export const AudioModeButton = styled(ToggleableButton).attrs(() => ({
  activeClass: 'active',
}))`
  margin-left: 5px;
  margin-right: 1px;
  font-size: 0.6em;

  &.active {
    color: #a5e30b;
    text-shadow: 0px 0px 5px #a5e30b;
  }
`;

export const BoxButton = styled(ToggleableButton).attrs(() => ({
  activeClass: 'active',
}))`
  margin-left: 4px;
  font-size: 0.6em;
  border-width: thin;
  padding: 4px 7px 4px 7px;
  border-style: solid;
  border-color: #9c9fad;

  &.active {
    color: #a5e30b;
    text-shadow: 0px 0px 10px #a5e30b;
    border-color: #a5e30b;
  }
`;
