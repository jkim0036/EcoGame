
//alert('play works');
//create function prepares keyboard for keyboard input and creates sprites (win and player)
var squareSize, score, speed, updateDelay, number;

var playState = {


  preload: function() {
    //  game.load.spritesheet('player', 'assets/polarSprite.png', 20, 20);
      game.load.image('iceberg', 'assets/iceberg.png');
      game.load.image('win', 'assets/fishfish.png')
      game.load.image('player', 'assets/bearbear.png')

      game.load.image('polarSea', 'assets/polarSea.png');
  },

  create: function() {
        this.background = game.add.sprite(0, 0, 'polarSea');

        this.keyboard = game.input.keyboard;

        this.player = game.add.sprite(20, 20, 'player');
    //    player.smoothed = false;
        this.player.scale.set(2);
        game.physics.enable(this.player, Phaser.Physics.ARCADE);

        this.win = {};
        this.win = game.add.sprite(256, 256, 'win');
        game.physics.enable(this.win, Phaser.Physics.ARCADE);
        this.win.scale.set(1.5);

        this.iceberg = {};
        this.iceberg = game.add.sprite(100, 200, 'iceberg');
        game.physics.enable(this.iceberg, Phaser.Physics.ARCADE);

        squareSize = 15;

        score = 0;

        textStyle_Key = { font: "bold 14px sans-serif", fill: "#ffffff", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

        // Score.
        this.game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);


/*        this.game.add.text(500, 20, "TIME", textStyle_Key);
        timeTextValue = game.add.text(558, 18, time.toString(), textStyle_Value);   */

/*        time = 0;
    //    time++;

        this.game.add.text(500, 20, "TIME:", textStyle_Key);
        timerText = game.add.text(558, 18, time.toString(), textStyle_Value);
        game.time.events.loop(Phaser.Timer.SECOND, countTime, this);
        timerText.anchor.setTo(0.5, 0.5);
*/


  },

  //defines what happens when the player sprite overlaps with the win sprite
  //allows human player to move player sprite
  update: function() {

        //enable player movement along x-axis
        if (this.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.player.body.velocity.x = -175;
    //        this.player.animations.add('left', [8,9], 10, true);
        } else if (this.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.player.body.velocity.x = 175;
    //        this.player.animations.add('right', [1,2], 10, true);
        } else {
            this.player.body.velocity.x = 0;
            this.player.frame = 4;
        }

        // enable movement along y-axis
        if (this.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.player.body.velocity.y = -175;
  //          this.player.animations.add('up', [11,12,13], 10, true);
        } else if (this.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.player.body.velocity.y = 175;
    //        this.player.animations.add('down', [4,5,6], 10, true);
        } else{
            this.player.body.velocity.y = 0;
        }
        //console.log(this.win.position.y);
        //console.log(this.win.position.x);
        //when the player and win sprites overlap, collectWin function is called
      game.physics.arcade.overlap(this.iceberg, this.player, this.Win, null, this);
          //this.makeIce();
       game.physics.arcade.overlap(this.win, this.player, this.collectWin, null, this);
        //this.generateWinRandomly();
      //console.log(this.win);
/*        time = Math.min(10, Math.floor(score/5));
        speedTextValue.text = '' + speed;  */

/*        updateDelay++;
        if (updateDelay % (10 - time) == 0) {.
            this.collectWin();
        } */


      this.generateIce();


  },




  generateWin: function() {

        var randomX = Math.floor(Math.random() * 40 ) * squareSize,
            randomY = Math.floor(Math.random() * 30 ) * squareSize;


        this.win = game.add.sprite(randomX, randomY, 'win');
        //this.collectWin();
  },

  collectWin: function() {

        //this.win.destroy();
        var randomX = Math.floor(Math.random() * 40 ) * squareSize,
            randomY = Math.floor(Math.random() * 30 ) * squareSize;

        this.win.x = randomX;
        this.win.y = randomY;
        //this.generateWin();

        score++;
        scoreTextValue.text = score.toString();
  },

  /*makeIce: function() {
      //number = Math.random()*2;
      if (number == 2) {
        this.generateIce();
    }
  }, */
  generateIce: function() {
    var randomNum = Math.random()*1000;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      //console.log("making a new ice");
      this.iceberg = game.add.sprite(randomX, randomY, 'iceberg');

    }


  },
  //Win function calls win state
  Win: function() {
    //alert("Game over")
        //this.iceberg.kill();
        game.state.start('win');
  }
};
