import * as THREE from "three";
import { planetsConfig } from "./consts";

export class State {
  private static currentPlanet = 0;

  public static scene = new THREE.Scene();
  public static camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  public static renderer = new THREE.WebGLRenderer();

  public static nextPlanet = () => {
    const max = Object.keys(planetsConfig).length - 1;
    this.currentPlanet = Math.min(max, this.currentPlanet + 1);
    return this.getPlanet();
  };

  public static previousPlanet = () => {
    this.currentPlanet = Math.max(0, this.currentPlanet - 1);
    return this.getPlanet();
  };

  public static getPlanet = () => {
    const planet = Object.values(planetsConfig).find((_, index) => {
      return index === this.currentPlanet;
    });
    return planet;
  };
}
