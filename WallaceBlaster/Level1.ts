module WallaceBlaster {
    export class Level1 extends Phaser.State {
        player: WallaceBlaster.Player;

        create() {
            this.player = new Player(this.game, 130, 284);
        }

        render() {
            this.game.debug.text("FPS: " + this.game.time.fps.toString(), 5, 25, "#00FF00");
        }
    }
}