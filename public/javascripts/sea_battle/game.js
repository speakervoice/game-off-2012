define(
  [
    'pulse.min',
    'sea_battle/scenes/main_menu',
    'sea_battle/scenes/level'
  ],
  function(_, MainMenuScene, LevelScene) {
    console.log('Game module initialization');
    return {
      engine: new pulse.Engine({
        size: {
          width: 480,
          height: 320
        },
        gameWindow: 'sea-battle-game'
      }),
      scenes: {},
      _buildScenes: function () {
        console.log('Game#_buildScenes');
        var self = this;

        // Create the main menu scene
        self.scenes.mainMenu = new MainMenuScene();
        self.scenes.mainMenu.events.bind('gameStart', function () {
          self.engine.deactivateScene(self.scenes.mainMenu);
          self.engine.activateScene(self.scenes.level);
          self.scenes.level.startGame();
        });

        // Create the level scene
        self.scenes.level = new LevelScene();
        self.scenes.level.events.bind('gameEnd', function () {
          self.engine.deactivateScene(self.scenes.level);
          self.engine.activateScene(self.scenes.mainMenu);
        });

        for (scene in self.scenes) { self.engine.addScene(self.scenes[scene]) };

        self.engine.activateScene(self.scenes.mainMenu);
      },
      init: function () {
        console.log('Game#init');
        var self = this;

        pulse.ready(function() {
          self._buildScenes();
          self.engine.go(50);
        });
      }
    }
  }
);