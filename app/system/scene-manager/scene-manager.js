export default class SceneManager {
  constructor(application) {
    this.scenes = [];
    this.activeScene;
    this.renderer = application.renderer;

    this.setupScenes(application.options.scenes);
  }

  start() {
    if (this.activeScene) {
      this.activeScene.render();
    }
  }

  setupScenes(scenes) {
    scenes.forEach((scene, index) => {
      const currentScene = new scene();
      currentScene.init(this.renderer);

      if (index === 0) {
        this.activeScene = currentScene;
      }

      this.scenes.push(currentScene);
    });
  }
}
