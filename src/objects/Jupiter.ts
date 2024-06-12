import { Camera, Renderer, TextureLoader } from "three";
import { Planet } from "../structures/Planet";
import { PlanetConfig } from "../types/types";
import texture from "../assets/jupiter.jpg";

export class Jupiter extends Planet {
  constructor(camera: Camera, renderer: Renderer, options: PlanetConfig) {
    super(camera, renderer, options, {
      map: new TextureLoader().load(texture),
    });
  }
}
