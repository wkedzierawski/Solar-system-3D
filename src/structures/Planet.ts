import { PlanetConfig } from "../types/types";
import { DragControls } from "three/examples/jsm/Addons.js";
import { State } from "../State";
import { CustomEvents } from "../objects/CustomEvents";
import {
  Camera,
  Group,
  Mesh,
  MeshBasicMaterialParameters,
  MeshStandardMaterial,
  Renderer,
  SphereGeometry,
} from "three";

export class Planet {
  protected camera: Camera;
  protected renderer: Renderer;

  private options: PlanetConfig;

  protected radius: number;
  public planetGroup = new Group();
  private sphere;

  constructor(
    camera: Camera,
    renderer: Renderer,
    planetOptions: PlanetConfig,
    options?: MeshBasicMaterialParameters
  ) {
    this.camera = camera;
    this.renderer = renderer;
    this.options = planetOptions;

    this.radius = planetOptions.radius;

    this.sphere = new Mesh(
      new SphereGeometry(this.radius),
      new MeshStandardMaterial(options)
    );

    this.handleDraggable();

    this.planetGroup.translateX(planetOptions.x);
    this.planetGroup.translateY(planetOptions.y);
    this.planetGroup.add(this.sphere);
  }

  public animate = () => {
    this.sphere.rotateY(0.0001);
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
    controls.transformGroup = true;

    CustomEvents.onPlanetChange(() => {
      controls.enabled = this.shouldEnableDraggable();
    });

    controls.mode = "rotate";
    controls.enabled = this.shouldEnableDraggable();

    return controls;
  };
}
