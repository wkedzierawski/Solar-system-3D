import { Camera, Renderer, TextureLoader } from "three";
import { Planet } from "./Planet";
import { PlanetOptions } from "../types/types";
import texture from "../assets/mercury.jpg";

export class Mercury extends Planet {
  constructor(camera: Camera, renderer: Renderer, options: PlanetOptions) {
    super(camera, renderer, options, {
      map: new TextureLoader().load(texture),
    });
  }
}
