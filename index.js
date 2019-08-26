const { App } = require('@slack/bolt');
const store = require('./store');
const axios = require('axios');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN
});


const postToChannel = (say) => {
  const data = {
    text: 'Happy Monday Everyone!! https://gph.is/2MvtCCQ',
    channel: 'temp_slack_bot', //'#appdev_developer',
  };
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    }
  }
  
  const url = 'https://slack.com/api/chat.postMessage';
  axios.post(url, data, config)
  .then((response) => {
    say('Post successful');
  })
  .catch(() => {
    say('whoops');
  })
}

// todo: add other events to this list
app.event('app_home_opened', ({ event, say }) => {  
  say('about to post to channel')
  postToChannel(say);
});


// Start your app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();

