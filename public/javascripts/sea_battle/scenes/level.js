define(['pulse.min'], function() {
  console.log('LevelScene module initialization');
  return pulse.Scene.extend({
    init: function (params) {
      console.log("LevelScene#init");
      this._super(params);

      var self = this;

      var layer = new pulse.Layer();
      layer.position = { x: 240, y: 160 };
      self.addLayer(layer);

      var background = new pulse.Sprite({
        src: 'javascripts/sea_battle/assets/level-bg.png',
        size: {
          width: 480,
          height: 320
        }
      });
      background.position = { x: 240, y: 160 };
      layer.addNode(background);
    },
    startGame: function () {
      console.log('LevelScene#startGame');
    }
  });
});