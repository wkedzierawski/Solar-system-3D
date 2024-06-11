const earthSize = 12800;
const getScale = (size: number) => size / earthSize;

export const planetsConfig = {
  mercury: {
    index: 0,
    radius: getScale(4900),
    x: 0,
    y: 0,
  },
  venus: {
    index: 1,
    radius: getScale(12100),
    x: 20,
    y: 0,
  },
  earth: {
    index: 2,
    radius: getScale(earthSize),
    x: 40,
    y: 0,
  },
  mars: {
    index: 3,
    radius: getScale(6800),
    x: 60,
    y: 0,
  },
  jupiter: {
    index: 4,
    radius: getScale(143000),
    x: 80,
    y: 0,
  },
  saturn: {
    index: 5,
    radius: getScale(120500),
    x: 120,
    y: 0,
  },
  uranus: {
    index: 6,
    radius: getScale(51100),
    x: 140,
    y: 0,
  },
  neptune: {
    index: 7,
    radius: getScale(49500),
    x: 160,
    y: 0,
  },
};
