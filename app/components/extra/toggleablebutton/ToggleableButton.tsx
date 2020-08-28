/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

interface ToggleableButtonProps {
  element: JSX.Element;
  className?: string;
  activeClass?: string;
  inactiveClass?: string;
}

export default function ToggleableButton(props: ToggleableButtonProps) {
  const { element, className, activeClass, inactiveClass } = props;
  const [active, setActive] = useState(false);

  function onClick() {
    setActive(!active);
  }

  const activeStyle = `${className ?? ''} ${activeClass ?? ''}`;
  const inactiveStyle = `${className ?? ''} ${inactiveClass ?? ''}`;

  return (
    <span onClick={onClick}>
      {React.cloneElement(element, {
        className: active ? activeStyle : inactiveStyle,
      })}
    </span>
  );
}
