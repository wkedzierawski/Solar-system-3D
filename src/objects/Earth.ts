import { Planet } from "../structures/Planet";
import { PlanetConfig } from "../types/types";
import {
  Camera,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  Renderer,
  TextureLoader,
} from "three";
import texture from "../assets/earth.jpg";
import clouds_texture from "../assets/earth_clouds.jpg";
import { getFresnelMaterial } from "../materials/freshnelMaterial";

export class Earth extends Planet {
  private atmosphereGroup = new Group();

  constructor(camera: Camera, renderer: Renderer, planetOptions: PlanetConfig) {
    super(camera, renderer, planetOptions, {
      map: new TextureLoader().load(texture),
    });

    const atmosphereGeometry = new IcosahedronGeometry(
      planetOptions.radius,
      12
    );

    const atmosphere = new Mesh(
      atmosphereGeometry,
      new MeshStandardMaterial({
        map: new TextureLoader().load(clouds_texture),
        opacity: 0.3,
        transparent: true,
      })
    );

    const glow = new Mesh(atmosphereGeometry, getFresnelMaterial());

    this.atmosphereGroup.add(atmosphere, glow);
    this.atmosphereGroup.scale.setScalar(1.001);

    this.planetGroup.add(this.atmosphereGroup);
  }

  public animate = () => {
    this.planetGroup.rotateY(0.0001);
    this.atmosphereGroup.rotateY(0.00005);
  };
}
