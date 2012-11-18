requirejs.config({
  baseUrl: 'javascripts'
});

requirejs(['pulse.min'], function() {
  pulse.ready(function() {
    // TODO: start building a game
  });
});