import { defaultOptions, SCREEN } from '../../configs/screen.options';
import * as THREE from 'three';

export class Application {
  constructor() {
    this.renderer;
  }

  initialize() {
    this.setupRenderer();
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(SCREEN.WIDTH, SCREEN.HEIGHT);
    this.renderer.setClearColor(0x000000);

    document.body.appendChild(this.renderer.domElement);
  }
}
