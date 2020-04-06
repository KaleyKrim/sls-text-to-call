export class Dialogue {
	dialogues = [
		"Hello? ...Hello? Yeah, it's me. Listen, I'm in trouble, I need you to come down to the docks right now. Right now! If you don't get down here in 5 minutes, we're gonna lose the whole shipment of papayas. That's right, the whole thing. Get over here as fast as you can.",
		"Hey girl, I left my wallet at home and I need you to come pay for my pho. I gotta get back to the office, so could you come soon? And by soon I mean now. Like right now. Thanks! See ya girl."
	]

	constructor() {}

	getRandom(): string {
		const i = Math.floor(Math.random() * Math.floor(this.dialogues.length - 1));
		return this.dialogues[i];
	}
}