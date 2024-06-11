import { Planet } from "./Planet";
import { PlanetOptions } from "../types/types";
import { Camera, Renderer, TextureLoader } from "three";
import texture from "../assets/earth.jpg";

export class Earth extends Planet {
  constructor(
    camera: Camera,
    renderer: Renderer,
    planetOptions: PlanetOptions
  ) {
    super(camera, renderer, planetOptions, {
      map: new TextureLoader().load(texture),
    });
  }
}
