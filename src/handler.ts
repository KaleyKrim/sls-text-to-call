import '@twilio-labs/serverless-runtime-types';
import { ServerlessFunctionSignature } from '@twilio-labs/serverless-runtime-types/types';
import Dialogue from "./lib/Dialogue";

export const handler: ServerlessFunctionSignature = ((context, event, callback) => {
	const twiml = new Twilio.twiml.VoiceResponse().say(new Dialogue().getRandom());
	callback(
		null,
		twiml
	)
});