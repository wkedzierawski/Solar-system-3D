import * as THREE from "three";
import { Earth } from "../objects/Earth";
import spaceBackground from "../assets/space.jpg";
import { Mars } from "../objects/Mars";
import { planetsConfig } from "../consts";
import { Mercury } from "../objects/Mercury";
import { Jupiter } from "../objects/Jupiter";
import { Neptune } from "../objects/Neptune";
import { Venus } from "../objects/Venus";
import { Uranus } from "../objects/Uranus";
import { Saturn } from "../objects/Saturn";
import { Sun } from "../objects/Sun";
import { SpaceStructure } from "../types/types";

export class MainScene extends THREE.Scene {
  private planets: SpaceStructure[] = [];

  constructor(camera: THREE.Camera, renderer: THREE.Renderer) {
    super();

    const spaceTexture = new THREE.TextureLoader().load(spaceBackground);
    this.planets.push(
      new Sun(camera, renderer, planetsConfig.Sun),
      new Mercury(camera, renderer, planetsConfig.Mercury),
      new Venus(camera, renderer, planetsConfig.Venus),
      new Earth(camera, renderer, planetsConfig.Earth),
      new Mars(camera, renderer, planetsConfig.Mars),
      new Jupiter(camera, renderer, planetsConfig.Jupiter),
      new Saturn(camera, renderer, planetsConfig.Saturn),
      new Uranus(camera, renderer, planetsConfig.Uranus),
      new Neptune(camera, renderer, planetsConfig.Neptune)
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
