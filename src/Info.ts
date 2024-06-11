import { State } from "./State";
import { createInfoTemplate } from "./template";

const classNames = {
  planetInfo: ".planet_info",
};

export class Info {
  public static updatePlanet = () => {
    const planet = State.getPlanet();
    const infoElement = document.querySelector(classNames.planetInfo);

    if (!planet || !infoElement) {
      return;
    }

    infoElement.innerHTML = createInfoTemplate(planet);
  };

  public static toggleVisible = (variant: "show" | "hide") => {
    const infoElement = document.querySelector(classNames.planetInfo);
    infoElement?.classList[variant === "show" ? "remove" : "add"]("hidden");
  };
}
