import { State } from "./State";
import * as TWEEN from "@tweenjs/tween.js";
import { PlanetName } from "./types/types";
import { planetsConfig } from "./consts";

export class Animations {
  private static animating = false;

  public static animateCameraOffset = (
    payload: { x: number; y: number; z: number },
    time: number = 800
  ) => {
    const coords = { ...State.camera.position };

    new TWEEN.Tween(coords)
      .to(payload, time)
      .onStart(() => {
        this.animating = true;
      })
      .onComplete(() => {
        this.animating = false;
      })
      .onUpdate((payload) =>
        State.camera.position.set(payload.x, payload.y, payload.z)
      )
      .start();
  };

  public static animateToPlanet = (name: PlanetName) => {
    const planet = Object.entries(planetsConfig).find(
      ([_, value]) => value.info.name === name
    )?.[1];

    if (!planet) {
      return;
    }

    this.animateCameraOffset({ ...planet, z: planet.radius * 2.5 });
  };

  public static isAnimating = () => this.animating;
}
