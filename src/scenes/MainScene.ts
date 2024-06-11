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

export class MainScene extends THREE.Scene {
  private planets: Planet[] = [];

  constructor(camera: THREE.Camera, renderer: THREE.Renderer) {
    super();

    const spaceTexture = new THREE.TextureLoader().load(spaceBackground);
    this.planets.push(
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
  }

  public animate = () => {
    this.planets.forEach((el) => el.animate());
  };
}
