
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fufuSuperDino
		const fufuSuperDino = this.add.image(400, 235, "FufuSuperDino") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(fufuSuperDino, false);
		fufuSuperDino.body.velocity.x = 100;
		fufuSuperDino.body.velocity.y = 100;
		fufuSuperDino.body.bounce.x = 1;
		fufuSuperDino.body.bounce.y = 1;
		fufuSuperDino.body.collideWorldBounds = true;
		fufuSuperDino.body.setOffset(31, 31);
		fufuSuperDino.body.setCircle(91);

		// barbarian
		const barbarian = this.add.image(220, 192, "barbarian") as Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body };
		this.physics.add.existing(barbarian, false);
		barbarian.body.velocity.x = -200;
		barbarian.body.velocity.y = 200;
		barbarian.body.bounce.x = 1;
		barbarian.body.bounce.y = 1;
		barbarian.body.collideWorldBounds = true;
		barbarian.body.setOffset(89, 54);
		barbarian.body.setSize(144, 213, false);

		// collider
		this.physics.add.collider(fufuSuperDino, barbarian);

		// fufuSuperDino (components)
		new PushOnClick(fufuSuperDino);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
