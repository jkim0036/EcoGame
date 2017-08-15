var menuState = {

    create: function () {

        // variablename(x-position, y-position, text, {font, text color});
        var nameLabel = game.add.text(80, 80, 'My First Game',
                                      { font: '50px Arial', fill: '#ffffff'});
        var startLabel = game.add.text(80, game.world.height-80, 'Press "w" to start',
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

alert('menu is working');
