import { useState } from 'react';

const usePressKey = (callback) => {
  const [keyPressed, setKeyPressed] = useState();
  const downHandler = (key) => {
    if (keyPressed !== key && key.length === 1) {
      setKeyPressed(key);
      callback && callback(key);
    }
  };
  const upHandler = () => {
    setKeyPressed(null);
  };

  return { keyPressed, downHandler, upHandler };
};

export default usePressKey;
