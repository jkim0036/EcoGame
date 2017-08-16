
/* Menu state displays instructions and waits for the player to perform
actions before calling next state, rather than calling automatically
(remove game.state.start statement from create function) */


var menuState = {
    preload: function() {
          game.load.image('polarSea', 'assets/polarSea.png');
    },
    create: function () {
       this.background = game.add.sprite(0, 0, 'polarSea');

        // variablename(x-position, y-position, text, {font, text color});
        var nameLabel = game.add.text(80, 80, 'POLAR SNAKES',
                                      {font: '50px Impact', fill: '#ffffff'});
        var startLabel = game.add.text(80, game.world.height-80, 'Press "w" to start',
                                      {font: '25px Impact', fill: '#ffffff'});
        var instructions = game.add.text(20, 200, 'Play as a polar bear using the arrow keys',
                                      {font: '25px Arial', fill: '#ffffff'});
        var instructions2 = game.add.text(20, 230, 'to collect fish and avoid icebergs!',
                                      {font: '25px Arial', fill: '#ffffff'});
        // using "Phaser.Keyboard.(Key)" defines key to interact with
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        //when player presses 'W' key, call start function
        wkey.onDown.addOnce(this.start, this);

    },

    //start function calls play state
    start: function() {
        game.state.start('play');
    }

};

//alert('menu is working');
