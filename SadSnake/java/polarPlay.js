


//create function prepares keyboard for keyboard input and creates sprites (win and player)


var cursors, apple, player, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue,
    textStyle_Key, textStyle_Value, right, left, up, down;

var playState = {
  

  preload: function() {
      //Loading assets: first parameter is variable pointing to image, second is image itself
/*      game.load.image('bearup', 'assets/bearup.png');
      game.load.image('bearright', 'assets/bearright.png');
      game.load.image('beardown', 'assets/beardown.png');
      game.load.image('bearleft', 'assets/bearleft.png');*/

      game.load.image('apple', 'assets/win.png');
      game.load.image('ice', 'assets/ice.png');
      game.load.image('gold', 'assets/player.png');

      game.load.spritesheet('player', 'assets/spaceman.png', 16, 16)
  },



  create: function() {


//        snake = [];                     // stack containing all parts of snake
        apple = {};                     // apple object
        squareSize = 15;                // l & w of square
        score = 0;                      // score
        speed = 0;                      // game speed
        updateDelay = 0;                // update variable
        direction = 'right';            // snake direction
        new_direction = null;           // store new direction
        addNew = false;                 // apple eaten

        // Set up a Phaser controller for keyboard input.
        cursors = game.input.keyboard.createCursorKeys();

        game.stage.backgroundColor = '#061f27';
//        game.stage.sprite(0, 0, 640, 480 'ice');

        // Generate the initial snake stack. Our snake will be 10 elements long.
        // Beginning at X=150 Y=150 and increasing the X on every iteration.
/*        for(var i = 0; i < 1; i++){
            snake[i] = game.add.sprite(150+i*squareSize, 150, 'up');  // Parameters are (X coordinate, Y coordinate, image)
        } */

        snake = game.add.sprite(48, 48, 'player', 1);
        player.smoothed = false;
        player.scale.set(4);
        left = player.animations.add('left', [8,9], 10, true);
        right = player.animations.add('right', [1,2], 10, true);
        up = player.animations.add('up', [11,12,13], 10, true);
        down = player.animations.add('down', [4,5,6], 10, true);

        // Genereate the first apple.
        this.generateApple();

        // Add Text to top of game.
        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
        console.log("here");
        // Score.
        game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);
        // Speed.
        game.add.text(500, 20, "SPEED", textStyle_Key);
        speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

  },

  //defines what happens when the player sprite overlaps with the win sprite
  //allows human player to move player sprite
  update: function() {

/*        //when the player and win sprites overlap, Win function is called
        game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

        //enable player movement along x-axis
        if (this.keyboard.isDown(Phaser.Keyboard.A)) {
            this.player.body.velocity.x = -175;
        } else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
            this.player.body.velocity.x = 175;
        } else {
            this.player.body.velocity.x = 0;
        }

        // enable movement along y-axis
        if (this.keyboard.isDown(Phaser.Keyboard.W)) {
            this.player.body.velocity.y = -175;
        } else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
            this.player.body.velocity.y = 175;
        } else{
            this.player.body.velocity.y = 0;
        }      */
        // Handle arrow key presses, while not allowing illegal direction changes that will kill the player.

    if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
        player.play('left');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
    }

    // A formula to calculate game speed based on the score.
    // The higher the score, the higher the game speed, with a maximum of 10;
    speed = Math.min(10, Math.floor(score/5));
    // Update speed value on game screen.
    speedTextValue.text = '' + speed;

    // Since the update function of Phaser has an update rate of around 60 FPS,
    // we need to slow that down make the game playable.

    // Increase a counter on every update call.
    updateDelay++;

    // Do game stuff only if the counter is aliquot to (10 - the game speed).
    // The higher the speed, the more frequently this is fulfilled,
    // making the snake move faster.
    if (updateDelay % (10 - speed) == 0) {

        // Snake movement

/*        var firstCell = snake[snake.length - 1],
            lastCell = snake.shift(),
            oldLastCellx = lastCell.x,
            oldLastCelly = lastCell.y;

        // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
        if(new_direction){
            direction = new_direction;
            new_direction = null;
        }

        // Change the last cell's coordinates relative to the head of the snake, according to the direction.

        if(direction == 'right'){

            lastCell.x = firstCell.x + 15;
            lastCell.y = firstCell.y;
        }
        else if(direction == 'left'){
            lastCell.x = firstCell.x - 15;
            lastCell.y = firstCell.y;
        }
        else if(direction == 'up'){
            lastCell.x = firstCell.x;
            lastCell.y = firstCell.y - 15;
        }
        else if(direction == 'down'){
            lastCell.x = firstCell.x;
            lastCell.y = firstCell.y + 15;
        }

        // Place the last cell in the front of the stack.
        // Mark it the first cell.

        snake.push(lastCell);
        firstCell = lastCell;

        //increase legnth of snake if apple eat
        if(addNew){
            snake.unshift(game.add.sprite(oldLastCellx, oldLastCelly, 'apple'));
            addNew = false;
        } */

        // Check for apple collision.
        //this.appleCollision();

        game.physics.arcade.collide(stars, platforms);
        game.physics.arcade.overlap(player, stars, appleCollision, null, this);

        // Check for collision with self. Parameter is the head of the snake.
        this.selfCollision(firstCell);

        // Check with collision with wall. Parameter is the head of the snake.
        this.wallCollision(firstCell);

    }

    if(player.body.collideWorldBounds = true){


        // If it's not in, we've hit a wall. Go to game over screen.
        game.state.start('win');
    }
  },

    generateApple: function() {

        // Chose a random place on the grid.
        // X is between 0 and 585 (39*15)
        // Y is between 0 and 435 (29*15)

        var randomX = Math.floor(Math.random() * 40 ) * squareSize,
            randomY = Math.floor(Math.random() * 30 ) * squareSize;

        // Add a new apple.
        apple = game.add.sprite(randomX, randomY, 'gold');
    },
    appleCollision: function() {

        // Check if any part of the snake is overlapping the apple.
        // This is needed if the apple spawns inside of the snake.
/*        for(var i = 0){
            if(snake[i].x == apple.x && snake[i].y == apple.y){

                // Next time the snake moves, a new block will be added to its length.
//                addNew = true;  */

                // Destroy the old apple.
                apple.destroy();

                // Make a new one.
                this.generateApple();

                // Increase score.
                score++;

                // Refresh scoreboard.
                scoreTextValue.text = score.toString();

          //  }
        }

    };

  //  wallCollision: function(player) {

        // Check if the head of the snake is in the boundaries of the game field.

    //    if(player.body.collideWorldBounds = true){


            // If it's not in, we've hit a wall. Go to game over screen.
      //      game.state.start('win');
        //}

  //  },




/*    selfCollision: function(head) {

        // Check if the head of the snake overlaps with any part of the snake.
        for(var i = 0; i < snake.length - 1; i++){
            if(head.x == snake[i].x && head.y == snake[i].y){

                // If so, go to game over screen.
                game.state.start('win');
            }
        } */

//    },

//};

alert('play works');
