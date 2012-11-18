define(['pulse.min'], function() {
  console.log('MainMenuScene module initialization');
  return pulse.Scene.extend({
    init: function(params) {
      console.log("MainMenuScene#init");
      this._super(params);

      var self = this;

      var layer = new pulse.Layer();
      layer.position = { x: 240, y: 160 };
      self.addLayer(layer);

      var background = new pulse.Sprite({
        src: 'javascripts/sea_battle/assets/menu-bg.png',
        size: {
          width: 480,
          height: 320
        }
      });
      background.position = { x: 240, y: 160 };
      layer.addNode(background);

      var startButton = new pulse.Sprite({
        src: 'javascripts/sea_battle/assets/start-button.png',
      });
      startButton.position = { x: 240, y: 160 };
      startButton.events.bind('click', function (event) {
        self.events.raiseEvent('gameStart', event);
      });
      layer.addNode(startButton);
    }
  });
});