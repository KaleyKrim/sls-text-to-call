import { ServerlessFunctionSignature } from '@twilio-labs/serverless-runtime-types/types';

export const handler: ServerlessFunctionSignature<{}, { Body: string, From: string, To: string }> = (async (context, event, callback) => {

	try {
		const client = context.getTwilioClient();
		await client.calls.create({
			from: event["To"].slice(1),
			to: event["From"].slice(1),
			url: process.env.TWIML_URL,
		});
	} catch (e) {
		console.error(e);
	}

	const msgTwiml = new Twilio.twiml.MessagingResponse().message('got you!').toString();	
	callback(
		null,
		msgTwiml
	)
});