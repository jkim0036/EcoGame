/* Three basic functions:
  Create Phaser.Game object, maps to gameDiv
  Adds states
  starts boot state */

  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

  //Adding each state
//  game.state.add('boot', bootState);
//  game.state.add('load', loadState);
  game.state.add('menu', menuState);
  game.state.add('play', playState);
  game.state.add('win', winState);

//Call the boot state
  game.state.start('menu');
