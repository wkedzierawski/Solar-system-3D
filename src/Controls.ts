import { State } from "./State";
import { Animations } from "./Animations";
import { PlanetName } from "./types/types";
import { DOMElements } from "./utils/DOMElements";

export class Controls {
  private started = false;

  public add = () => {
    this.addKeyBinds();
  };

  public startExploring = async () => {
    this.started = true;
    DOMElements.getStart()?.remove();
    Animations.animateToPlanet(PlanetName.Earth);
  };

  private addKeyBinds = () => {
    document.addEventListener("keydown", ({ key }) => {
      if (Animations.isAnimating()) {
        return;
      }

      if (!this.started) {
        key === "Enter" && this.startExploring();
        return;
      }

      const planet = State.getPlanet();
      const cameraMove = planet.radius;

      switch (key) {
        case "ArrowUp":
        case "w":
          const nextZ = State.camera.position.z - cameraMove;
          if (planet && planet?.radius * State.maxPlanetZoom > nextZ) {
            return;
          }

          Animations.animateCameraOffset(
            { ...State.camera.position, z: nextZ },
            300
          );
          break;
        case "ArrowDown":
        case "s":
          const _nextZ = State.camera.position.z + cameraMove;
          if (planet && planet?.radius * State.maxPlanetZoom > _nextZ) {
            return;
          }

          Animations.animateCameraOffset(
            { ...State.camera.position, z: _nextZ },
            300
          );
          break;

        case "ArrowLeft":
        case "a":
          if (State.isFirstPlanet()) {
            return;
          }

          const previousPlanet = State.previousPlanet();
          if (previousPlanet) {
            Animations.animateToPlanet(previousPlanet.info.name);
          }
          break;

        case "ArrowRight":
        case "d":
          if (State.isLastPlanet()) {
            return;
          }

          const nextPlanet = State.nextPlanet();
          if (nextPlanet) {
            Animations.animateToPlanet(nextPlanet.info.name);
          }
          break;
      }
    });
  };
}
