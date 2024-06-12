import { Camera, Renderer, TextureLoader } from "three";
import { PlanetConfig } from "../types/types";
import texture from "../assets/sun.jpg";
import { Star } from "../structures/Star";
export class Sun extends Star {
  constructor(camera: Camera, renderer: Renderer, options: PlanetConfig) {
    super(camera, renderer, options, {
      map: new TextureLoader().load(texture),
    });
  }
}
