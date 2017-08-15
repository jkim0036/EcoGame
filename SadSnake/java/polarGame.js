/* Three basic functions:
  Create Phaser.Game object, maps to gameDiv
  Adds states
  starts boot state */
alert('game');
  var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'gameDiv', { preload: preload, create: create, update: update, render: render });
//  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');
  //Adding each state
  game.state.add('boot', bootState);
  game.state.add('load', loadState);
//  game.state.add('menu', menuState);
  game.state.add('play', playState);
  alert('This is okay');

  game.state.add('win', winState);


//Call the boot state
  game.state.start('boot');
