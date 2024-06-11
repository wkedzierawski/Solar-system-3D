import * as THREE from "three";
import { PlanetConfig } from "../types/types";

export class Planet {
  protected camera: THREE.Camera;
  protected renderer: THREE.Renderer;

  private options: PlanetConfig;

  protected radius: number;
  public sphere: THREE.Mesh<
    THREE.SphereGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;

  constructor(
    camera: THREE.Camera,
    renderer: THREE.Renderer,
    planetOptions: PlanetConfig,
    options?: THREE.MeshBasicMaterialParameters
  ) {
    this.camera = camera;
    this.renderer = renderer;
    this.options = planetOptions;

    this.radius = planetOptions.radius;

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(this.radius),
      new THREE.MeshBasicMaterial(options)
    );

    this.sphere.translateX(planetOptions.x);
    this.sphere.translateY(planetOptions.y);
  }

  public animate = () => {
    this.sphere.rotateY(this.options.rotation);
  };
}
