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

  setupRenderer(renderer) {
    this.renderer = renderer;
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(...Object.values(CAMERA.DEFAULT));
    this.camera.position.z = CAMERA.DEFAULT.z;
    this.camera.lookAt(this.position);
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.update();
    this.renderer.render(this, this.camera);
  }
}
