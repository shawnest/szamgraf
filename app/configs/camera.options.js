import { SCREEN } from './screen.options';

export const CAMERA = Object.freeze({
  DEFAULT: {
    fov: 75,
    aspect: SCREEN.ASPECT_RATIO,
    near: 0.1,
    far: 1000,
    z: 15
  }
});
