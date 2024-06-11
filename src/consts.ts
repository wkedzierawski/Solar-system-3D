import { PlanetConfig, PlanetName } from "./types/types";

const earthSize = 12800;
const getScale = (size: number) => size / earthSize;

export const planetsConfig: Record<string, PlanetConfig> = {
  sun: {
    radius: getScale(2000000),
    x: -200,
    y: 0,
    info: {
      name: PlanetName.Sun,
      size: 2000000,
    },
    rotation: 0.000001,
  },
  mercury: {
    radius: getScale(4900),
    x: 0,
    y: 0,
    info: {
      name: PlanetName.Mercury,
      size: 4900,
    },
    rotation: 0.00001,
  },
  venus: {
    radius: getScale(12100),
    x: 5,
    y: 0,
    info: {
      name: PlanetName.Venus,
      size: 12100,
    },
    rotation: 0.001,
  },
  earth: {
    radius: getScale(earthSize),
    x: 10,
    y: 0,
    info: {
      name: PlanetName.Earth,
      size: earthSize,
    },
    rotation: 0.001,
  },
  mars: {
    radius: getScale(6800),
    x: 15,
    y: 0,
    info: {
      name: PlanetName.Mars,
      size: 6800,
    },
    rotation: 0.001,
  },
  jupiter: {
    radius: getScale(143000),
    x: 30,
    y: 0,
    info: {
      name: PlanetName.Jupiter,
      size: 143000,
    },
    rotation: 0.001,
  },
  saturn: {
    radius: getScale(120500),
    x: 60,
    y: 0,
    info: {
      name: PlanetName.Saturn,
      size: 120500,
    },
    rotation: 0.001,
  },
  uranus: {
    radius: getScale(51100),
    x: 80,
    y: 0,
    info: {
      name: PlanetName.Uranus,
      size: 51100,
    },
    rotation: 0.001,
  },
  neptune: {
    radius: getScale(49500),
    x: 100,
    y: 0,
    info: {
      name: PlanetName.Neptune,
      size: 49500,
    },
    rotation: 0.001,
  },
};
