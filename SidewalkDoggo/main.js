var menuState = {
    preload: function () {
      game.load.image('background', 'assets/sun2.png');
      game.load.image('sidewalk', 'assets/sidewalk2.png');
    },
    create: function () {

        // variablename(x-position, y-position, text, {font, text color});
        this.background = game.add.sprite(0, 0,'background');
        this.sidewalk = game.add.sprite(0, 440 ,'sidewalk');
        var nameLabel = game.add.text(20, 80, 'Sidewalk Doggo',
                                      { font: '50px Impact', fill: '#ffffff'});
        var startLabel = game.add.text(160, game.height-80, 'Press "w" to start',
                                      {font: '25px Impact', fill: '#ffffff'});
        var instructionLabel = game.add.text(20, 200, 'Protect the dog from touching the hot \nsidewalk by moving the skateboard with \nthe arrow keys!',
                                      {font: '35px Impact', fill: '#000000'});
        // using "Phaser.Keyboard.(Key)" defines key to interact with
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        //when player presses 'W' key, call start function
        wkey.onDown.addOnce(this.start, this);

    },

    //start function calls play state
    start: function() {
        game.state.start('main');
    }

};
var winState = {
      preload: function() {
        game.load.image('sidewalk', 'assets/sidewalk2.png');
        game.load.image('background', 'assets/happywin.png');
      },

      create: function() {
      this.background = game.add.sprite(0, 0,'background');
      this.sidewalk = game.add.sprite(0, 440 ,'sidewalk');
      var winLabel = game.add.text(80, 80, 'YOU WON!',
                                  {font: '50px Impact', fill: '#ffffff'});

      //instructions on how to restart the game
      var startLabel = game.add.text(80, game.height-80, 'Press the "w" key to restart',
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

var loseState = {
      preload: function() {
        game.load.image('sidewalk', 'assets/sidewalk2.png');
        game.load.image('background', 'assets/sadsun.png');
      },

      create: function() {
      this.background = game.add.sprite(0, 0,'background');
      this.sidewalk = game.add.sprite(0, 440 ,'sidewalk');
      var winLabel = game.add.text(80, 80, 'GAME OVER',
                                  {font: '50px Impact', fill: '#ffffff'});

      //instructions on how to restart the game
      var startLabel = game.add.text(80, game.height-80, 'Press the "w" key to restart',
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
var mainState = {
    preload: function() {
        game.load.image('paddle', 'assets/paddle2.png');
        game.load.image('brick', 'assets/brick2.png');
        game.load.image('ball', 'assets/doggo2.png');
        game.load.image('sidewalk', 'assets/sidewalk2.png');
        game.load.image('background', 'assets/finalsun.png');
    },

    create: function() {
      this.background = game.add.sprite(0, 0,'background');
      this.sidewalk = game.add.sprite(0, 440 ,'sidewalk');
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.world.enableBody = true;
      this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
      this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
      this.paddle = game.add.sprite(game.width/1.5, game.height/1.15, 'paddle');
      this.paddle.body.immovable = true;
      this.bricks = game.add.group();
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 5; j++) {
          var brick = game.add.sprite(55+i*60, 55+j*35, 'brick');
          brick.body.immovable = true;
          this.bricks.add(brick);
        }
      }
      this.ball = game.add.sprite(300, 250, 'ball');
      this.ball.body.velocity.x = 200;
      this.ball.body.velocity.y = 200;
      this.ball.body.bounce.setTo(1);
      this.ball.body.collideWorldBounds = true;
    },

    update: function() {
      if (this.left.isDown) this.paddle.body.velocity.x = -400;
      else if (this.right.isDown) this.paddle.body.velocity.x = 400;
      else this.paddle.body.velocity.x = 0;
      game.physics.arcade.collide(this.paddle, this.ball);
      game.physics.arcade.collide(this.ball, this.bricks, this.hit, null, this);
      if (this.ball.y > game.height/1.25)
        game.state.start('lose');
      if (this.bricks.total == 0)
        game.state.start('win');
    },

    hit: function(ball, brick) {
    brick.kill();
    },


};

// Initialize the game and start our state
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'Sidewalk_Doggo');
game.state.add('menu', menuState);
game.state.add('main', mainState);
game.state.add('win', winState);
game.state.add('lose', loseState);
game.state.start('menu');

