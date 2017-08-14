
//vv similar to menu state, just winning instead

var winState = {

      create: function() {

      var winLabel = game.add.text(80, 80, 'GAME OVER!',
                                  {font: '50px Arial', fill: '#00FF00'});

      //instructions on how to restart the game
      var startLabel = game.add.text(80, game.world.height-80, 'Press the "w" key to restart',
                                    {font: '25px Arial', fill: '#ffffff'});

              var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

              //call restart function
              wkey.onDown.addOnce(this.restart, this);
      // Create button to start game similar to the main menu.
      this.add.button(0, 0, 'gameover', this.startGame, this);

      // Last Score Info.
      game.add.text(235, 350, "LAST SCORE", { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
      game.add.text(350, 348, score.toString(), { font: "bold 20px sans-serif", fill: "#fff", align: "center" });

      },

      //restart function calls menu state
      restart: function() {
          game.state.start('menu');
      }
};
