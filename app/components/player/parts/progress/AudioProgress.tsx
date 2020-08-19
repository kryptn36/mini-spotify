import React, { useState, useRef } from 'react';
import styles from './AudioProgress.scss';
import useWindowEvent from './WindowEventHook';

export default function AudioProgress() {
  const [width, setWidth] = useState(200);
  const [isInDrag, setIsInDrag] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  function moveProgress(x: number) {
    if (timelineRef.current && progressRef.current) {
      const newWidth = x - progressRef.current.getBoundingClientRect().left;
      if (newWidth >= 0 && newWidth <= timelineRef.current.offsetWidth) {
        setWidth(newWidth);
      }
    }
  }

  function mouseUp(event) {
    event.preventDefault();

    setIsInDrag(false);
    window.removeEventListener('mouseup', mouseUp);
  }

  function onMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    moveProgress(event.clientX);
    setIsInDrag(true);
  }

  function onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (isInDrag) {
      moveProgress(event.clientX);
    } else {
      // Unregister to prevent unneeded calls.
      window.removeEventListener('mousemove', onMouseMove);
    }
  }

  useWindowEvent([
    { eventName: 'mousemove', callback: onMouseMove },
    { eventName: 'mouseup', callback: mouseUp },
  ]);

  return (
    <div>
      <div
        ref={timelineRef}
        onMouseDown={onMouseDown}
        className={styles['audio-timeline']}
      >
        <div
          ref={progressRef}
          onMouseDown={onMouseDown}
          className={styles['audio-timeline--progress']}
          style={{ width: width + 'px' }}
        ></div>
      </div>
    </div>
  );
}
