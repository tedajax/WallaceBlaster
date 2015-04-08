module WallaceBlaster {
    export class Boot extends Phaser.State {
        preload() {
            this.load.image('preloadBar', 'assets/loader.png');
        }

        create() {
            this.input.maxPointers = 1;

            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                //this.stage.scale.pageAlignHorizontally = true;
            } else {

            }

            this.game.state.start('Preloader', true, false);
        }
    }
} 