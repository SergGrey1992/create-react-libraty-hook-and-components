import { useEffect, useState } from 'react';

const generateRandomColor = () => {
  const r = Math.round((Math.random() * 255)); // red 0 to 255
  const g = Math.round((Math.random() * 255)); // green 0 to 255
  const b = Math.round((Math.random() * 255)); // blue 0 to 255
  return `rgb(${r}, ${g}, ${b})`;
};

const useRandomColor = (): [string] => {
  const [color, setColor] = useState(generateRandomColor());
  useEffect(() => {
    setTimeout(() => setColor(generateRandomColor()), 1000);
  });
  return [color];
};

export default useRandomColor;
