import styled from 'styled-components';

const StyledSlider = styled.input.attrs(() => ({
  type: 'range',
}))`
  -webkit-appearance: none;
  border-radius: 8px;
  height: 5px;
  outline: none;
  transition: background 450ms ease-in;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    z-index: 2;
    background-color: #c8c9ce;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;

export default StyledSlider;
