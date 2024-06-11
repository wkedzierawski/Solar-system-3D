import * as THREE from "three";
import { Earth } from "../objects/Earth";
import spaceBackground from "../assets/space.jpg";
import { Planet } from "../objects/Planet";
import { Mars } from "../objects/Mars";
import { planetsConfig } from "../consts";
import { Mercury } from "../objects/Mercury";
import { Jupiter } from "../objects/Jupiter";
import { Neptune } from "../objects/Neptune";
import { Venus } from "../objects/Venus";
import { Uranus } from "../objects/Uranus";
import { Saturn } from "../objects/Saturn";
import { Sun } from "../objects/Sun";

export class MainScene extends THREE.Scene {
  private planets: Planet[] = [];

  constructor(camera: THREE.Camera, renderer: THREE.Renderer) {
    super();

    const spaceTexture = new THREE.TextureLoader().load(spaceBackground);
    this.planets.push(
      new Sun(camera, renderer, planetsConfig.sun),
      new Mercury(camera, renderer, planetsConfig.mercury),
      new Venus(camera, renderer, planetsConfig.venus),
      new Earth(camera, renderer, planetsConfig.earth),
      new Mars(camera, renderer, planetsConfig.mars),
      new Jupiter(camera, renderer, planetsConfig.jupiter),
      new Saturn(camera, renderer, planetsConfig.saturn),
      new Uranus(camera, renderer, planetsConfig.uranus),
      new Neptune(camera, renderer, planetsConfig.neptune)
    );
    this.background = spaceTexture;
    this.planets.forEach((el) => {
      this.add(el.sphere);
    });

    this.addLight();
  }

  public animate = () => {
    this.planets.forEach((el) => el.animate());
  };

  private addLight = () => {
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(-1, 0, 100);
    light.target.position.set(100, 0, 0);
    this.add(light);
    this.add(light.target);
  };
}
