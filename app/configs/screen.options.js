export const SCREEN = Object.freeze({
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
  ASPECT_RATIO() {
    return this.WIDTH / this.HEIGHT;
  }
});
