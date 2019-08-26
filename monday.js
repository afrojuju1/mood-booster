require('dotenv').config();
const axios = require('axios');

const gifs = [
  'https://gph.is/1Nz3ncN',
  'https://gph.is/2MvtCCQ',
  'https://gph.is/2qXxdj8'
];

const phrases = [
  'Everyone',
  'People',
  'Crew',
  'NEXTers',
];

const randomInt = (min, max) => {
  const minn = Math.ceil(min);
  const maxx = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive 
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn;
}

const getGif = () => {
  const index = randomInt(0, gifs.length - 1);
  return gifs[index];
}

const getPhrase = () => {
  const index = randomInt(0, gifs.length - 1);
  return phrases[index];
}


const blastHappyMonday = () => {
  const gif = getGif();
  const phrase = getPhrase();

  const data = {
    text: `Happy Monday ${phrase}!! ${gif}`,
    channel: 'monday',
  };
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    }
  }
  
  const url = 'https://slack.com/api/chat.postMessage';
  axios.post(url, data, config)
      .then(() => {
        console.log('Success. Message posted');
      })
      .catch(() => {
        console.error('Failed to post message :(');
      })
}

// send the message
blastHappyMonday();
