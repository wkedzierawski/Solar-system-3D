import { Camera, Renderer, TextureLoader } from "three";
import { Planet } from "./Planet";
import { PlanetOptions } from "../types/types";
import texture from "../assets/saturn.jpg";

export class Saturn extends Planet {
  constructor(camera: Camera, renderer: Renderer, options: PlanetOptions) {
    super(camera, renderer, options, {
      map: new TextureLoader().load(texture),
    });
  }
}
