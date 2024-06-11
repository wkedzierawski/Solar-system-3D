import { Planet } from "./Planet";
import { PlanetConfig } from "../types/types";
import { Camera, Renderer, TextureLoader } from "three";
import texture from "../assets/earth.jpg";

export class Earth extends Planet {
  constructor(camera: Camera, renderer: Renderer, planetOptions: PlanetConfig) {
    super(camera, renderer, planetOptions, {
      map: new TextureLoader().load(texture),
    });
  }
}
