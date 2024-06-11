import { State } from "./State";
import { Animations } from "./Animations";

export class Controls {
  public add = () => {
    this.addKeyBinds();
  };

  private addKeyBinds = () => {
    const cameraMove = 1;
    document.addEventListener("keydown", ({ key }) => {
      if (Animations.isAnimating()) {
        return;
      }

      const planet = State.getPlanet();

      switch (key) {
        case "ArrowUp":
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
          const previousPlanet = State.previousPlanet();
          if (previousPlanet) {
            Animations.animateToPlanet(previousPlanet.info.name);
          }
          break;

        case "ArrowRight":
          const nextPlanet = State.nextPlanet();
          if (nextPlanet) {
            Animations.animateToPlanet(nextPlanet.info.name);
          }
          break;
      }
    });
  };
}
