

var loadState = {

    //'preload' is part of Phaser syntax
    preload: function() {

        //add loading label on screen
        var loadingLabel = game.add.text(80, 150, 'Loading...',
                            {font: '30px Courier', fill: '#ffffff' });
        //Loading assets: first parameter is variable pointing to image, second is image itself
/*        game.load.image('bearup', 'assets/bearup.png');
        game.load.image('bearright', 'assets/bearright.png');
        game.load.image('beardown', 'assets/beardown.png');
        game.load.image('bearleft', 'assets/bearleft.png');*/
        game.load.spritesheet('player', 'assets/spaceman.png', 16, 16);
        game.load.image('apple', 'assets/win.png');
        game.load.image('ice', 'assets/ice.png');
        game.load.image('gold', 'assets/player.png');
    },

    create: function() {
  /*      game.state.add('boot', bootState);
        game.state.add('load', loadState);
        game.state.add('menu', menuState);
        game.state.add('play', playState);
        game.state.add('win', winState);*/

        game.state.start('menu');
    }

};

alert('load');
