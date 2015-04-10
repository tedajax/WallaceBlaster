module WallaceBlaster {
    export class Bullet extends Phaser.Sprite {
        speed: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'player_laser', 0);

            game.physics.enable(this, Phaser.Physics.ARCADE);
            this.anchor.setTo(0.5, 0.5);

            this.speed = 2000;

            game.add.existing(this);
        }

        update() {
            this.body.velocity.x = this.speed;

            if (this.position.x > 2000) {
                this.kill();
            }
        }


    }
} 