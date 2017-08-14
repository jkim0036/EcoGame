

var loadState = {

    //'preload' is part of Phaser syntax
    preload: function() {

        //add loading label on screen
        var loadingLabel = game.add.text(80, 150, 'Loading...',
                            {font: '30px Courier', fill: '#ffffff' });
        //Loading assets: first parameter is variable pointing to image, second is image itself
        game.load.image('snake', 'assets/player.png');
        game.load.image('apple', 'assets/win.png');
        game.load.image('ice', 'assets/ice.png');
        game.load.image('player', 'assets/player.png');
    },

    create: function() {
        game.state.start('menu');
    }

};
