
//vv similar to menu state, just winning instead

var winState = {
      preload: function() {
            game.load.image('polarSea', 'assets/polarSea.png');
      },
      create: function () {
         this.background = game.add.sprite(0, 0, 'polarSea');

      var winLabel = game.add.text(80, 80, 'GAME OVER!',
                                  {font: '50px Impact', fill: 'ffffff'});

      //instructions on how to restart the game
      var startLabel = game.add.text(80, game.world.height-80, 'Press the "w" key to restart',
                                    {font: '25px Impact', fill: '#ffffff'});

              var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

              //call restart function
              wkey.onDown.addOnce(this.restart, this);
      },

      //restart function calls menu state
      restart: function() {
          game.state.start('menu');
      }
};
