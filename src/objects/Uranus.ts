import { Camera, Renderer, TextureLoader } from "three";
import { Planet } from "./Planet";
import { PlanetConfig } from "../types/types";
import texture from "../assets/uranus.jpg";

export class Uranus extends Planet {
  constructor(camera: Camera, renderer: Renderer, options: PlanetConfig) {
    super(camera, renderer, options, {
      map: new TextureLoader().load(texture),
    });
  }
}
