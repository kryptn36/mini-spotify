import styled from 'styled-components';
import CustomSlider from 'components/extra/customslider/CustomSlider';

// eslint-disable-next-line import/prefer-default-export
export const TimelineSlider = styled(CustomSlider).attrs(() => ({
  leftColor: '#88b617',
  rightColor: '#3c3d41',
}))`
  width: 100%;
  margin: 0;
  border-radius: 0 !important;

  &::-webkit-slider-thumb {
    width: 0 !important;
    height: 0 !important;
  }
`;
