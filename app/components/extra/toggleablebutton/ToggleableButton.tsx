import React, { useState } from 'react';

interface ToggleableButtonProps {
  element: JSX.Element;
  activeClass: string;
  inactiveClass: string;
}

export default function ToggleableButton(props: ToggleableButtonProps) {
  const { element, activeClass, inactiveClass } = props;
  const [active, setActive] = useState(false);

  function onClick() {
    setActive(!active);
  }

  return (
    <span role="button" onClick={onClick}>
      {React.cloneElement(element, {
        className: active ? activeClass : inactiveClass,
      })}
    </span>
  );
};
