import * as THREE from "three";
import { PlanetConfig } from "../types/types";
import { DragControls } from "three/examples/jsm/Addons.js";
import { State } from "../State";
import { CustomEvents } from "./CustomEvents";

export class Planet {
  protected camera: THREE.Camera;
  protected renderer: THREE.Renderer;

  private options: PlanetConfig;

  protected radius: number;
  public sphere;

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
      new THREE.MeshStandardMaterial(options)
    );

    this.handleDraggable();

    this.sphere.translateX(planetOptions.x);
    this.sphere.translateY(planetOptions.y);
  }

  public animate = () => {
    this.sphere.rotateY(this.options.rotation);
  };

  private shouldEnableDraggable = () => {
    const planet = State.getPlanet();
    return planet?.info.name === this.options.info.name;
  };

  private handleDraggable = () => {
    const controls = new DragControls(
      [this.sphere],
      this.camera,
      this.renderer.domElement
    );

    CustomEvents.onPlanetChange(() => {
      controls.enabled = this.shouldEnableDraggable();
    });

    controls.mode = "rotate";
    controls.enabled = this.shouldEnableDraggable();

    return controls;
  };
}
