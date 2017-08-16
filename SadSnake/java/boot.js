
var bootState = {

    //'create' is from Phaser function
    preload: function() {

      //start physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);
      //call load state
      game.state.start('load');
    }
};
//alert('boot is working');
