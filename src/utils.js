require('dotenv').config();
const axios = require('axios');
const moment = require('moment');

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
/*
 1 - Monday
 5 - Friday
 6 - Saturday
 7 - Sunday
 */
const isTodayMonday = () => {
  return moment().local().day() === 1;
};

const isWeekDay = () => {
  const intDay = moment().local().day();
  return intDay >= 1 && intDay <= 5;
};

module.exports = {
  postToChannel,
  isTodayMonday,
  isWeekDay,
};
