import { useEffect } from 'react';

interface WindowEvent {
  eventName: string;
  callback: any;
}

const useWindowEvent = (windowEvents: WindowEvent[]) => {
  function mount() {
    windowEvents.forEach((e) =>
      window.addEventListener(e.eventName, e.callback)
    );
  }

  function unmount() {
    windowEvents.forEach((e) =>
      window.removeEventListener(e.eventName, e.callback)
    );
  }

  useEffect(() => {
    mount();
    return unmount;
  });
};

export default useWindowEvent;
