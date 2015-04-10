module WallaceBlaster {
    export class Player extends Phaser.Sprite {
        speed: number;
        fireDelay: number;
        fireTimer: number;
        fireOffset: Phaser.Point;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'player_ship', 0);

            game.physics.enable(this, Phaser.Physics.ARCADE);
            this.anchor.setTo(0.5, 0.5);

            this.speed = 300;
            this.fireDelay = 200;
            this.fireTimer = 0;
            this.fireOffset = new Phaser.Point(10, 15);

            game.add.existing(this);
        }

        update() {
            this.body.velocity.x = this.getHorizontalMovement() * this.speed;
            this.body.velocity.y = -this.getVerticalMovement() * this.speed;

            if (this.fireTimer > 0) {
                this.fireTimer -= this.game.time.elapsedMS;
            }

            if (this.getShoot()) {
                this.fireTimer = this.fireDelay;
                var firePoint: Phaser.Point = new Phaser.Point(0, 0);
                Phaser.Point.add(this.position, this.fireOffset, firePoint);
                var bullet = new Bullet(this.game, firePoint.x, firePoint.y);
            }
        }

        getShoot(): boolean {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.Z)) {
                if (this.fireTimer <= 0) {
                    return true;
                }
            }
            return false;
        }

        getHorizontalMovement(): number {
            var result = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                result -= 1;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                result += 1;
            }
            return result;
        }

        getVerticalMovement(): number {
            var result = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                result -= 1;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                result += 1;
            }
            return result;
        }
    }
}