import { Camera, Renderer, Scene } from "three";
import { State } from "./State";
import * as TWEEN from "@tweenjs/tween.js";

export class Controls {
  private scene: Scene;
  private camera: Camera;
  private renderer: Renderer;

  constructor(scene: Scene, camera: Camera, renderer: Renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
  }

  public add = () => {
    this.addKeyBinds();
  };

  private animateOffset = (payload: { x: number; y: number }) => {
    const cords = { ...this.camera.position };

    new TWEEN.Tween(cords)
      .to(payload, 800)
      .onUpdate(() => this.camera.position.set(cords.x, cords.y, cords.z))
      .start();
  };

  private addKeyBinds = () => {
    const cameraMove = 1;
    document.addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "ArrowUp":
          this.camera.translateZ(-cameraMove);
          break;
        case "ArrowDown":
          this.camera.translateZ(cameraMove);
          break;

        case "ArrowLeft":
          const previousPlanet = State.previousPlanet();
          if (previousPlanet) {
            this.animateOffset({ ...previousPlanet });
          }
          break;

        case "ArrowRight":
          const nextPlanet = State.nextPlanet();
          if (nextPlanet) {
            this.animateOffset({ ...nextPlanet });
          }
          break;
      }
    });
  };
}
