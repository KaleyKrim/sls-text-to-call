export default class {
	dialogues = [
		"testingtesting",
		"aa aa"
	]

	constructor() {}

	getRandom(): string {
		const i = Math.floor(Math.random() * Math.floor(this.dialogues.length - 1));
		return this.dialogues[i];
	}
}