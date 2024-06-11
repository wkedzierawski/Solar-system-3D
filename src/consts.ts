import { PlanetConfig, PlanetName } from "./types/types";

const earthSize = 12800;
const getScale = (size: number) => size / earthSize;

export const planetsConfig: Record<string, PlanetConfig> = {
  mercury: {
    index: 0,
    radius: getScale(4900),
    x: 0,
    y: 0,
    info: {
      name: PlanetName.Mercury,
      size: 4900,
    },
  },
  venus: {
    index: 1,
    radius: getScale(12100),
    x: 5,
    y: 0,
    info: {
      name: PlanetName.Venus,
      size: 12100,
    },
  },
  earth: {
    index: 2,
    radius: getScale(earthSize),
    x: 10,
    y: 0,
    info: {
      name: PlanetName.Earth,
      size: earthSize,
    },
  },
  mars: {
    index: 3,
    radius: getScale(6800),
    x: 15,
    y: 0,
    info: {
      name: PlanetName.Mars,
      size: 6800,
    },
  },
  jupiter: {
    index: 4,
    radius: getScale(143000),
    x: 30,
    y: 0,
    info: {
      name: PlanetName.Jupiter,
      size: 143000,
    },
  },
  saturn: {
    index: 5,
    radius: getScale(120500),
    x: 60,
    y: 0,
    info: {
      name: PlanetName.Saturn,
      size: 120500,
    },
  },
  uranus: {
    index: 6,
    radius: getScale(51100),
    x: 80,
    y: 0,
    info: {
      name: PlanetName.Uranus,
      size: 51100,
    },
  },
  neptune: {
    index: 7,
    radius: getScale(49500),
    x: 100,
    y: 0,
    info: {
      name: PlanetName.Neptune,
      size: 49500,
    },
  },
};
