const classNames = {
  planetInfo: ".planet_info",
  loading: ".loading",
  start: ".start",
};

export class DOMElements {
  public static getLoading = () =>
    document.querySelector<HTMLDivElement>(classNames.loading);

  public static getPlanetInfo = () =>
    document.querySelector<HTMLDivElement>(classNames.planetInfo);

  public static getStart = () =>
    document.querySelector<HTMLDivElement>(classNames.start);
}
