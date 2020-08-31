/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import StyledSlider from './CustomSlider.styles';

export interface CustomSliderProps {
  leftColor: string;
  rightColor: string;
  min?: number;
  max?: number;
  thumbImageUrl?: string;
  snapChunks?: number;
  className?: string;
}

function getClosest(snapPoints: number[], currentValue: number): number {
  return snapPoints.reduce((prev, curr) => {
    const isCurrent =
      Math.abs(curr - currentValue) < Math.abs(prev - currentValue);
    return isCurrent ? curr : prev;
  });
}

function CustomSlider(props: CustomSliderProps) {
  const { leftColor, rightColor, min, max, snapChunks, className } = props;

  const snapTargets = useMemo(() => {
    const targets: number[] = [];

    if (snapChunks) {
      const steps = max / (snapChunks - 1);
      targets.push(min, max);
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i <= snapChunks - 2; i++) {
        targets.push(steps * i);
      }
    }
    return targets;
  }, [snapChunks, min, max]);

  function updateBackground(target: HTMLInputElement) {
    const value = (Number(target.value) / Number(target.max)) * 100;
    target.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${value}%, ${rightColor} ${value}%, ${rightColor} 100%)`;
  }

  function onVolumeInput(event: React.FormEvent<HTMLInputElement>) {
    updateBackground(event.currentTarget);
  }

  function onVolumeChange(event: React.FormEvent<HTMLInputElement>) {
    if (snapTargets.length > 0) {
      const closest = getClosest(
        snapTargets,
        Number(event.currentTarget.value)
      );
      event.currentTarget.value = closest.toString();
    }

    updateBackground(event.currentTarget);
  }

  return (
    <StyledSlider
      min={min}
      max={max}
      onInput={onVolumeInput}
      onMouseUp={onVolumeChange}
      className={className}
    />
  );
}

export default styled(CustomSlider)`
  ${(props) => ({
    background: `linear-gradient(to right, ${props.leftColor} 0%, ${props.leftColor} 50%, ${props.rightColor} 50%, ${props.rightColor} 100%)`,
  })}

  ${({ thumbImageUrl }) =>
    thumbImageUrl && {
      '::-webkit-slider-thumb': {
        backgroundImage: `url(${thumbImageUrl})`,
      },
    }}
`;
