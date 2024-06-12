import { Animations } from "./Animations";
import { Controls } from "./Controls";
import { Info } from "./Info";
import { State } from "./State";
import { CustomEvents } from "./objects/CustomEvents";
import { MainScene } from "./scenes/MainScene";
import "./style.css";
import * as TWEEN from "@tweenjs/tween.js";

State.renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(State.renderer.domElement);

State.camera.position.setZ(100);

const controls = new Controls();
controls.add();
const scene = new MainScene(State.camera, State.renderer);

State.loadingManger.onLoad = () => {
  const initalPlanet = State.getPlanet();
  if (initalPlanet) {
    Animations.animateToPlanet(initalPlanet.info.name).then(Info.updatePlanet);
  }
  CustomEvents.onPlanetChange(Info.updatePlanet);
};

const animate = () => {
  scene.animate();
  State.renderer.render(scene, State.camera);
  TWEEN.update();
};

State.renderer.setAnimationLoop(animate);
