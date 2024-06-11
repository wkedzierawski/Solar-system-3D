import { Camera, Renderer, TextureLoader } from "three";
import { Planet } from "./Planet";
import { PlanetOptions } from "../types/types";
import marsTexture from "../assets/mars.jpg";

export class Mars extends Planet {
  constructor(camera: Camera, renderer: Renderer, options: PlanetOptions) {
    super(camera, renderer, options, {
      map: new TextureLoader().load(marsTexture),
    });
  }
}
