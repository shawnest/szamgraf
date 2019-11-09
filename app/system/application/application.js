import * as THREE from 'three';

import { SCREEN } from '../../configs/screen.options';
import SceneManager from '../scene-manager/scene-manager';

export default class Application {
  constructor(options) {
    this.renderer;
    this.options = options;
    this.sceneManager;
  }

  initialize() {
    this.setupRenderer();
    this.setupSceneManager();
  }

  setupSceneManager() {
    this.sceneManager = new SceneManager(this);
    this.sceneManager.start();
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(SCREEN.WIDTH, SCREEN.HEIGHT);
    this.renderer.setClearColor(0x000000);

    document.body.appendChild(this.renderer.domElement);
  }
}
