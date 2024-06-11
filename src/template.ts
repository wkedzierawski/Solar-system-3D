import { PlanetConfig } from "./types/types";

export const createInfoTemplate = (planet: PlanetConfig) => `
      <div class="planet_label">Name: ${planet.info.name}</div>
      <div class="planet_label">Radius: ${planet.info.radius} km</div>
      <div class="planet_label">Population: ${planet.info.population}</div>
      <div class="planet_label">Orbital period: ${planet.info.orbitalPeriod}</div>
      <div class="planet_label">Distance from sun: ${planet.info.distanceFromSun}</div>
      <div class="planet_label">Length of day: ${planet.info.lengthOfDay}</div>
      <div class="planet_label">Gravity: ${planet.info.gravity}m/s²</div>
      <div class="planet_label">Mass: ${planet.info.mass}</div>
      <div class="planet_label">Surface area: ${planet.info.surfaceArea}</div>
`;
