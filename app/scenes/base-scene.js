import * as THREE from 'three';

import Scene from '../system/scene/scene';

export default class BaseScene extends Scene {
  constructor() {
    super();
  }

  create() {
    const geometry = new THREE.SphereGeometry(8, 50, 30);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.z = 0.2;

    this.add(this.mesh);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}
