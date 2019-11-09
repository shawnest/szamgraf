import Application from './system/application/application';
import BaseScene from './scenes/base-scene';

const main = () => {
  const app = new Application({
    scenes: [BaseScene]
  });
  app.initialize();
};

main();
