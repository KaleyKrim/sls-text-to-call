import { ServerlessFunctionSignature } from '@twilio-labs/serverless-runtime-types/types';

export const handler: ServerlessFunctionSignature<{}, { Body: string, From: string, To: string }> = (async (context, event, callback) => {
	const path = Runtime.getAssets()['/lib/Dialogue'].path;
	const dialoguesModule = await import(path);

	const callTwiml = new Twilio.twiml.VoiceResponse().say(new dialoguesModule.Dialogue().getRandom()).toString();
	const client = context.getTwilioClient();
	await client.calls.create({
		from: event["To"].slice(1),
		to: event["From"].slice(1),
		twiml: callTwiml,
	});

	const msgTwiml = new Twilio.twiml.MessagingResponse().message('got you!').toString();	
	callback(
		null,
		msgTwiml
	)
});