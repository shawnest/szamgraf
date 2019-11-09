import * as THREE from 'three';

export default class Plane extends THREE.Mesh {
  constructor(width, height) {
    super();
    this.geometry = new THREE.PlaneGeometry(width, height);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide
    });
  }
}
