export enum PlanetName {
  Sun = "Sun",
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
  radius: number;
  x: number;
  y: number;
  info: {
    name: PlanetName;
    size: number;
  };
  rotation: number;
};
