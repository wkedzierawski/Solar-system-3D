import { State } from "./State";
import { Animations } from "./Animations";
import { PlanetName } from "./types/types";
import { DOMElements } from "./utils/DOMElements";

export class Controls {
  private started = false;
  private zoomDuration = 300;

  public add = () => {
    this.addKeyBinds();
  };

  private goToNextPlanet = () => {
    if (State.isLastPlanet()) {
      return;
    }

    const nextPlanet = State.nextPlanet();
    if (nextPlanet) {
      Animations.animateToPlanet(nextPlanet.info.name);
    }
  };

  private zoomIn = () => {
    const planet = State.getPlanet();
    const cameraMove = planet.radius;

    const nextZ = State.camera.position.z - cameraMove;
    if (planet.radius * State.maxPlanetZoom > nextZ) {
      return;
    }

    Animations.animateCameraOffset(
      { ...State.camera.position, z: nextZ },
      this.zoomDuration
    );
  };

  private zoomOut = () => {
    const planet = State.getPlanet();
    const cameraMove = planet.radius;

    const nextZ = State.camera.position.z + cameraMove;
    if (planet.radius * State.maxPlanetZoom > nextZ) {
      return;
    }

    Animations.animateCameraOffset(
      { ...State.camera.position, z: nextZ },
      this.zoomDuration
    );
  };

  private goToPreviousPlanet = () => {
    if (State.isFirstPlanet()) {
      return;
    }

    const previousPlanet = State.previousPlanet();
    if (previousPlanet) {
      Animations.animateToPlanet(previousPlanet.info.name);
    }
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

      switch (key) {
        case "ArrowUp":
        case "w":
          this.zoomIn();
          break;

        case "ArrowDown":
        case "s":
          this.zoomOut();
          break;

        case "ArrowLeft":
        case "a":
          this.goToPreviousPlanet();
          break;

        case "ArrowRight":
        case "d":
          this.goToNextPlanet();
          break;
      }
    });
  };
}
