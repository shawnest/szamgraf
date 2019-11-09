export const SCREEN = Object.freeze({
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
  get ASPECT_RATIO() {
    return this.WIDTH / this.HEIGHT;
  }
});
