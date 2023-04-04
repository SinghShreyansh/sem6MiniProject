// src/twitter.js

const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'c3sFnv7hxrfgRk5zN4VT1tfpk',
  consumer_secret: 'Tmr7cq2PLOUEA8nP2zrW5w5OT2yKieu5HE4FuOniyEZfin9Ktv',
  access_token_key: '1390587786491617282-5K8Sz2lHtG35RP1UzjHnkl1LvvkYyw',
  access_token_secret: '4CGdhXjBIlELdJqlm0vXdyQoDtslmVaNmgMebqSSs1ADf'
});

const stream = client.stream('user', { with: 'user' });

export default function listenToTwitterMessages(callback) {
  stream.on('data', function(event) {
    if (event.direct_message_events) {
      const messages = event.direct_message_events.map(message => {
        return {
          text: message.message_create.message_data.text,
          senderId: message.message_create.sender_id,
          timestamp: message.created_timestamp
        };
      });
      callback(messages);
    }
  });

  stream.on('error', function(error) {
    console.log(error);
  });
}
