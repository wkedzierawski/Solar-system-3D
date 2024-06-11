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

      switch (key) {
        case "ArrowUp":
          Animations.animateCameraOffset(
            {
              ...State.camera.position,
              z: State.camera.position.z - cameraMove,
            },
            300
          );
          break;
        case "ArrowDown":
          Animations.animateCameraOffset(
            {
              ...State.camera.position,
              z: State.camera.position.z + cameraMove,
            },
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
