import { State } from "./State";
import { createInfoTemplate } from "./template";
import { DOMElements } from "./utils/DOMElements";

export class Info {
  public static updatePlanet = () => {
    const planet = State.getPlanet();
    const infoElement = DOMElements.getPlanetInfo();

    if (!planet || !infoElement) {
      return;
    }

    infoElement.innerHTML = createInfoTemplate(planet);
  };

  public static toggleVisible = (variant: "show" | "hide") => {
    const infoElement = DOMElements.getPlanetInfo();
    infoElement?.classList[variant === "show" ? "remove" : "add"]("hidden");
  };
}
