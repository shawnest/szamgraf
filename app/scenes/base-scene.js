import * as THREE from 'three';

import Scene from '../system/scene/scene';
import Plane from '../gameobjects/plane';
import Brick from '../gameobjects/brick';

export default class BaseScene extends Scene {
  constructor() {
    super();
  }

  create() {
    this.add(new Plane(10, 15));
    this.add(new Brick(1, 10));
  }

  update() {}
}
