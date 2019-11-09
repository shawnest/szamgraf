import * as THREE from 'three';

export default class Brick extends THREE.Mesh {
  constructor(width, height) {
    super();
    this.geometry = new THREE.BoxGeometry(width, height);
    this.material = new THREE.MeshToonMaterial({color: 0xff0000});
  }
}
