import twilio from 'twilio'

// .env variable
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

export const verifySMS = (to) => {
    const client = new twilio(accountSid, authToken);
    
    client.verify.v2.services('VA40b91685fc2b670e2e8d441e85733a5a')
                .verifications
                .create({to, channel: 'sms'})
                .then(verification => console.log(verification.sid));
}


// client.messages
//   .create({
//     from: +18302228126,
//     to, body
//   })
//   .then((message) => console.log(message.sid));