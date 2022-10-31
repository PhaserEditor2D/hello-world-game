
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
