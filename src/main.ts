import { Animations } from "./Animations";
import { Controls } from "./Controls";
import { Info } from "./Info";
import { State } from "./State";
import { CustomEvents } from "./objects/CustomEvents";
import { MainScene } from "./scenes/MainScene";
import * as TWEEN from "@tweenjs/tween.js";
import { DOMElements } from "./utils/DOMElements";

State.renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(State.renderer.domElement);

const controls = new Controls();
const scene = new MainScene(State.camera, State.renderer);

const initalPlanet = State.getPlanet();
State.camera.position.set(initalPlanet.x, initalPlanet.y, 100);

State.loadingManger.onLoad = async () => {
  CustomEvents.onPlanetChange(Info.updatePlanet);
  DOMElements.getLoading()?.remove();
  controls.add();
};

const animate = () => {
  scene.animate();
  State.renderer.render(scene, State.camera);
  TWEEN.update();
};

State.renderer.setAnimationLoop(animate);
