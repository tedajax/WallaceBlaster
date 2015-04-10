module WallaceBlaster {
    export class MainMenu extends Phaser.State {
        create() {
            this.startGame();
        }

        startGame() {
            this.game.state.start('Level1', true, false);
        }
    }
} 