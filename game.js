/**
 * Created by .
 * User: grapswiz
 * Date: 11/04/17
 * Time: 12:27
 * To change this template use File | Settings | File Templates.
 */
enchant();

window.onload = function() {
  var game = new Game(320, 320);
  game.preload('img/icon.gif', 'img/bear.gif', 'img/pad.png');
  game.onload = function() {
    var bear = new Sprite(20, 30);
    bear.image = game.assets['img/bear.gif'];
    var bearSpeed = 5;
    bear.addEventListener('enterframe', function() {
      if (this.frame >= 3) {
        this.frame = 0;
      }
      this.frame += 1;

      if (this.x < banana.x) {
        this.x += bearSpeed;
      } else {
        this.x -= bearSpeed;
      }
      if (this.y < banana.y) {
        this.y += bearSpeed;
      } else {
        this.y -= bearSpeed;
      }
    });

    var banana = new Sprite(16, 16);
    banana.image = game.assets['img/icon.gif'];
    banana.frame = 16;
    banana.x = 100 + parseInt(Math.random() * 100, 10);
    banana.y = 100 + parseInt(Math.random() * 100, 10);
    var baSpeed = 3;
    banana.addEventListener('enterframe', function() {
      if (game.input.up) {
        this.y -= baSpeed;

        if(this.within(bear, 30)){
          bear.y += 50;
        }
      }
      if (game.input.down) {
        this.y += baSpeed;
      }
      if (game.input.right) {
        this.x += baSpeed;
      }
      if (game.input.left) {
        this.x -= baSpeed;
      }
      if (this.intersect(bear)) {
        bear.x = 0;
        bear.y = 0;

        var be = new Sprite(20, 30);
        be.image = game.assets['img/bear.gif'];
        be.x = game.width - Math.random() * 100;
        be.y = game.height - Math.random() * 100;
        be.addEventListener('enterframe', function() {
          if (this.frame >= 3) {
            this.frame = 0;
          }
          this.frame += 1;

          if (this.x < banana.x) {
            this.x += bearSpeed;
          } else {
            this.x -= bearSpeed;
          }
          if (this.y < banana.y) {
            this.y += bearSpeed;
          } else {
            this.y -= bearSpeed;
          }
        });
        game.rootScene.addChild(be);
      }
    });

    game.rootScene.addChild(bear);
    game.rootScene.addChild(banana);
  };
  game.start();
};