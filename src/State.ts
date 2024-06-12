import * as THREE from "three";
import { planetsConfig } from "./consts";
import { CustomEvents, EventType } from "./objects/CustomEvents";
import { PlanetName } from "./types/types";

export class State {
  private static currentPlanet: PlanetName = PlanetName.Earth;
  private static planetKeys = Object.keys(planetsConfig) as PlanetName[];
  public static maxPlanetZoom = 2.5;

  public static scene = new THREE.Scene();
  public static camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000000
  );

  public static setCurrentPlanet = (value: PlanetName) => {
    this.currentPlanet = value;
    CustomEvents.trigger(EventType.PLANET_CHANGED);
  };

  public static loadingManger = THREE.DefaultLoadingManager;

  public static renderer = new THREE.WebGLRenderer();

  public static nextPlanet = () => {
    const max = this.planetKeys.length - 1;

    const nextIndex = Math.min(
      max,
      this.planetKeys.findIndex((item) => item === this.currentPlanet) + 1
    );

    this.setCurrentPlanet(this.planetKeys[nextIndex]);
    return this.getPlanet();
  };

  public static previousPlanet = () => {
    const prevIndex = Math.max(
      0,
      this.planetKeys.findIndex((item) => item === this.currentPlanet) - 1
    );

    this.setCurrentPlanet(this.planetKeys[prevIndex]);
    return this.getPlanet();
  };

  public static getPlanet = () => {
    return planetsConfig[this.currentPlanet];
  };

  public static isFirstPlanet = () => this.planetKeys[0] === this.currentPlanet;

  public static isLastPlanet = () => {
    const maxIndex = this.planetKeys.length - 1;
    return this.planetKeys[maxIndex] === this.currentPlanet;
  };
}
