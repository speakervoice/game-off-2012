requirejs.config({
  baseUrl: 'javascripts',
  shim: {
    'sea_battle/game': 'pulse.min'
  }
});

requirejs(['sea_battle/game'], function(game) {
  game.init();
});