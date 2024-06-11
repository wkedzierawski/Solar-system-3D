import * as THREE from "three";
import { Earth } from "../objects/Earth";
import spaceBackground from "../assets/space.jpg";
import { Planet } from "../objects/Planet";
import { Mars } from "../objects/Mars";
import { planetsConfig } from "../consts";

export class MainScene extends THREE.Scene {
  private planets: Planet[] = [];

  constructor(camera: THREE.Camera, renderer: THREE.Renderer) {
    super();

    const spaceTexture = new THREE.TextureLoader().load(spaceBackground);
    this.planets.push(
      new Earth(camera, renderer, planetsConfig.earth),
      new Mars(camera, renderer, planetsConfig.mars)
    );
    this.background = spaceTexture;
    this.planets.forEach((el) => this.add(el.sphere));
  }

  public animate = () => {
    this.planets.forEach((el) => el.animate());
  };
}
