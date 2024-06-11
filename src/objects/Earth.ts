import earthAsset from "../assets/earth.jpg";
import { Planet } from "./Planet";
import { PlanetOptions } from "../types/types";
import { Camera, Renderer, TextureLoader } from "three";

export class Earth extends Planet {
  constructor(
    camera: Camera,
    renderer: Renderer,
    planetOptions: PlanetOptions
  ) {
    const uvTexture = new TextureLoader().load(earthAsset);
    super(camera, renderer, planetOptions, { map: uvTexture });
  }
}
