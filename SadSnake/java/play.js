
//alert('play works');
//create function prepares keyboard for keyboard input and creates sprites (win and player)
var squareSize, score, speed, updateDelay, number, size;

var playState = {


  preload: function() {
        window.addEventListener("keydown", function(e) {
      // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
    }, false);
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

    //    this.iceberg = {};
    /*    this.iceberg = game.add.sprite(100, 200, 'iceberg');
        game.physics.enable(this.iceberg, Phaser.Physics.ARCADE);
        this.iceberg.scale.set(1.2); */

        squareSize = 15;

        score = 0;

        textStyle_Key = { font: "bold 14px sans-serif", fill: "#ffffff", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

        // Score.
        this.game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);

  //      size = this.iceberg.scale.set(0.5);


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
      game.physics.arcade.overlap(this.player, this.iceberg, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg1, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg2, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg3, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg4, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg5, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg6, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg7, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg8, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg9, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg10, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg11, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg12, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg13, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg14, this.Win, null, this);
      game.physics.arcade.overlap(this.player, this.iceberg15, this.Win, null, this);
          //this.makeIce();
      game.physics.arcade.overlap(this.win, this.player, this.collectWin, null, this);




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
      this.iceberg = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg, Phaser.Physics.ARCADE);
      this.iceberg.scale.set(1.2);
    }
  },
  generateIce1: function() {
    var randomNum = Math.random()*1000;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      this.iceberg1 = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg1, Phaser.Physics.ARCADE);
      this.iceberg1.scale.set(1.4);
      }
    },
  generateIce2: function() {
    var randomNum = Math.random()*1000;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg2 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg2, Phaser.Physics.ARCADE);
    this.iceberg2.scale.set(1.4);
  }
  },
  generateIce3: function() {
    var randomNum = Math.random()*1200;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg3 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg3, Phaser.Physics.ARCADE);
    this.iceberg3.scale.set(1.2);
  }
  },
  generateIce4: function() {
    var randomNum = Math.random()*1200;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg4 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg4, Phaser.Physics.ARCADE);
    this.iceberg4.scale.set(1.5);
  }
  },
  generateIce5: function() {
    var randomNum = Math.random()*1500;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg5 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg5, Phaser.Physics.ARCADE);
    this.iceberg5.scale.set(1.5);
  }
  },
  generateIce6: function() {
    var randomNum = Math.random()*1200;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg6 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg6, Phaser.Physics.ARCADE);
    this.iceberg6.scale.set(1);
  }
  },
  generateIce7: function() {
    var randomNum = Math.random()*1200;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg7 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg7, Phaser.Physics.ARCADE);
    this.iceberg7.scale.set(1.3);
  }
  },
  generateIce8: function() {
    var randomNum = Math.random()*800;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg8 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg8, Phaser.Physics.ARCADE);
    this.iceberg8.scale.set(1.3);
  }
  },
  generateIce9: function() {
    var randomNum = Math.random()*800;
    //console.log(randomNum);
    if(randomNum<2) {
    var randomX = Math.floor(Math.random() * 40 ) * squareSize,
        randomY = Math.floor(Math.random() * 30 ) * squareSize;
    this.iceberg9 = game.add.sprite(randomX, randomY, 'iceberg');
    game.physics.enable(this.iceberg9, Phaser.Physics.ARCADE);
    this.iceberg9.scale.set(1.2);
  }
  },
  generateIce10: function() {
    var randomNum = Math.random()*800;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      this.iceberg10 = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg10, Phaser.Physics.ARCADE);
      this.iceberg.scale10.set(1.2);
  }
  },
  generateIce11: function() {
    var randomNum = Math.random()*800;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      this.iceberg11 = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg11, Phaser.Physics.ARCADE);
      this.iceberg11.scale.set(1.2);
  }
  },
  generateIce12: function() {
    var randomNum = Math.random()*800;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      this.iceberg12 = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg12, Phaser.Physics.ARCADE);
      this.iceberg12.scale.set(1.2);
  }
  },
  generateIce13: function() {
    var randomNum = Math.random()*1000;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      this.iceberg13 = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg13, Phaser.Physics.ARCADE);
      this.iceberg13.scale.set(1.2);
  }
  },
  generateIce14: function() {
    var randomNum = Math.random()*900;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      this.iceberg14 = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg14, Phaser.Physics.ARCADE);
      this.iceberg14.scale.set(1.2);
  }
  },
  generateIce15: function() {
    var randomNum = Math.random()*1000;
    //console.log(randomNum);
    if(randomNum<2) {
      var randomX = Math.floor(Math.random() * 40 ) * squareSize,
          randomY = Math.floor(Math.random() * 30 ) * squareSize;
      this.iceberg15 = game.add.sprite(randomX, randomY, 'iceberg');
      game.physics.enable(this.iceberg15, Phaser.Physics.ARCADE);
      this.iceberg15.scale.set(1.2);
  }
  },
  //Win function calls win state
  Win: function() {
    //alert("Game over")
        //this.iceberg.kill();
        game.state.start('win');
  }
};
