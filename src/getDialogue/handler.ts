import { ServerlessFunctionSignature } from '@twilio-labs/serverless-runtime-types/types';

export const handler: ServerlessFunctionSignature<{}, { Body: string, From: string, To: string }> = (async (_context, _event, callback) => {
	const path = Runtime.getAssets()['/lib/Dialogue'].path;
	const dialoguesModule = await import(path);

	try {
		const callTwiml = new Twilio.twiml.VoiceResponse().say(new dialoguesModule.Dialogue().getRandom());
		callback(
			null,
			callTwiml.toString()
		)

	} catch (e) {
		console.error(e);
	}

});