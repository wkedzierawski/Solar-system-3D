import {
  Camera,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  Renderer,
  RingGeometry,
  TextureLoader,
  Vector3,
} from "three";
import { Planet } from "../structures/Planet";
import { PlanetConfig } from "../types/types";
import texture from "../assets/saturn.jpg";
import ringTexture from "../assets/saturn_ring.png";

export class Saturn extends Planet {
  constructor(camera: Camera, renderer: Renderer, options: PlanetConfig) {
    super(camera, renderer, options, {
      map: new TextureLoader().load(texture),
    });

    const geometry = new RingGeometry(
      options.radius + 3,
      options.radius + 7,
      64
    );
    const pos = geometry.attributes.position;
    const v3 = new Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      geometry.attributes.uv.setXY(
        i,
        v3.length() < options.radius + 4 ? 0 : 1,
        1
      );
    }

    const material = new MeshBasicMaterial({
      map: new TextureLoader().load(ringTexture),
      color: 0xffffff,
      side: DoubleSide,
      transparent: true,
    });
    const ring = new Mesh(geometry, material);
    ring.rotateX(2);
    this.planetGroup.add(ring);
  }
}
