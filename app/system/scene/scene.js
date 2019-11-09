import * as THREE from 'three';

import { CAMERA } from '../../configs/camera.options';

export default class Scene extends THREE.Scene {
  constructor() {
    super();
    this.camera;
    this.renderer;

    this.setupCamera();
  }

  init(renderer) {
    this.setupCamera();
    this.setupRenderer(renderer);
    this.create();
  }

  create() {}

  update() {}

  add(gameObject, x = 0, y = 0, z = 0) {
    super.add(gameObject);
    gameObject.position.set(x, y, z);
  }

  setupRenderer(renderer) {
    this.renderer = renderer;
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(...Object.values(CAMERA.DEFAULT));
    this.camera.position.z = CAMERA.DEFAULT.z;
    this.camera.position.setY(-20);
    this.camera.lookAt(this.position);
    super.add(this.camera);
    super.add(new THREE.AmbientLight(0x660000));
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.update();
    this.renderer.render(this, this.camera);
  }
}
