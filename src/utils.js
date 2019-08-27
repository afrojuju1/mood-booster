require('dotenv').config();
const axios = require('axios');

const postToChannel = (text, channel) => {
  const data = {
    text,
    channel,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    }
  };

  const url = 'https://slack.com/api/chat.postMessage';
  axios.post(url, data, config)
    .then((response) => {
      console.log('Post successful');
    })
    .catch((error) => {
      console.error('failed to post quote. ', error.response);
    })
};

module.exports = {
  postToChannel,
};
