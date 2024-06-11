import { State } from "./State";
import * as TWEEN from "@tweenjs/tween.js";
import { PlanetName } from "./types/types";
import { planetsConfig } from "./consts";
import { Info } from "./Info";

export class Animations {
  private static animating = false;

  public static animateCameraOffset = (
    payload: { x: number; y: number; z: number },
    time: number = 800
  ) => {
    return new Promise<void>((resolve) => {
      const coords = { ...State.camera.position };

      new TWEEN.Tween(coords)
        .to(payload, time)
        .onStart(() => {
          this.animating = true;
        })
        .onComplete(() => {
          this.animating = false;
          resolve();
        })
        .onUpdate((payload) =>
          State.camera.position.set(payload.x, payload.y, payload.z)
        )
        .start();
    });
  };

  public static animateToPlanet = async (name: PlanetName) => {
    const planet = Object.entries(planetsConfig).find(
      ([_, value]) => value.info.name === name
    )?.[1];

    if (!planet) {
      return;
    }

    Info.toggleVisible("hide");

    await this.animateCameraOffset({
      ...planet,
      z: planet.radius * State.maxPlanetZoom,
    });

    Info.toggleVisible("show");
    Info.updatePlanet();
  };

  public static isAnimating = () => this.animating;
}
