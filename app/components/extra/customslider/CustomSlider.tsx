/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';
import styles from './CustomSlider.scss';

interface CustomSliderProps {
  leftColor: string;
  rightColor: string;
  thumbImageUrl?: string;
  snapTargets?: number[];
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
  const { leftColor, rightColor, snapTargets, className } = props;

  function updateBackground(target: HTMLInputElement) {
    const value = (Number(target.value) / Number(target.max)) * 100;
    target.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${value}%, ${rightColor} ${value}%, ${rightColor} 100%)`;
  }

  function onVolumeInput(event: React.FormEvent<HTMLInputElement>) {
    updateBackground(event.currentTarget);
  }

  function onVolumeChange(event: React.FormEvent<HTMLInputElement>) {
    if (snapTargets) {
      const closest = getClosest(
        snapTargets,
        Number(event.currentTarget.value)
      );
      event.currentTarget.value = closest.toString();
    }
    updateBackground(event.currentTarget);
  }

  return (
    <input
      min="0"
      max="100"
      onInput={onVolumeInput}
      onMouseUp={onVolumeChange}
      className={`${styles['custom-slider']} ${className}`}
      type="range"
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
