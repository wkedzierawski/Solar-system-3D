export enum PlanetName {
  Mercury = "Mercury",
  Venus = "Venus",
  Earth = "Earth",
  Mars = "Mars",
  Jupiter = "Jupiter",
  Saturn = "Saturn",
  Uranus = "Uranus",
  Neptune = "Neptune",
}

export type PlanetConfig = {
  index: number;
  radius: number;
  x: number;
  y: number;
  info: {
    name: PlanetName;
    size: number;
  };
};
