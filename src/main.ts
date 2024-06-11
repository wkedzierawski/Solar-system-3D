import { Controls } from "./Controls";
import { State } from "./State";
import { MainScene } from "./scenes/MainScene";
import "./style.css";
import * as TWEEN from "@tweenjs/tween.js";

State.renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(State.renderer.domElement);

State.camera.position.setZ(10);

const controls = new Controls(State.scene, State.camera, State.renderer);
const scene = new MainScene(State.camera, State.renderer);

const animate = () => {
  scene.animate();
  State.renderer.render(scene, State.camera);
  TWEEN.update();
};

State.renderer.setAnimationLoop(animate);
controls.add();
