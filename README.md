# On Demand Call Service

A convenient service that responds to SMS messages with a voice call to help you dodge unwanted human interaction.

## How it works

Send an SMS to the service's number, and it'll immediately call you and read out a lengthy script detailing randomly selected urgent business that needs your attention.

Great for avoiding run-ins with acquaintances, escaping awkward conversations, and excusing yourself from unbearable events.

## Development

Built with Twilio Runtime and Serverless Framework.

To deploy:

1. Set `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` environment variables.

2. Compile typescript / deploy serverless functions
```
npm run deploy
```
3. Configure Twilio phone number to request to webhook on incoming SMS (https://www.twilio.com/console/phone-numbers/incoming → select number → Messaging, and input URL to the rescue-call main function)

4. Text your number to try it out!
