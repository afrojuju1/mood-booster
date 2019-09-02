const { postToChannel, isTodayMonday } = require('./utils');

const gifs = [
  'https://gph.is/1Nz3ncN',
  'https://gph.is/2MvtCCQ',
  'https://gph.is/2qXxdj8',
  'http://gph.is/15RTH5O',
  'https://gph.is/XMeVyX',
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
};

const getGif = () => {
  const index = randomInt(0, gifs.length - 1);
  return gifs[index];
};

const getPhrase = () => {
  const index = randomInt(0, gifs.length - 1);
  return phrases[index];
};

const blastHappyMonday = () => {
  const gif = getGif();
  const phrase = getPhrase();

  const text = `Happy Monday ${phrase}!! ${gif}`;
  const channel = 'monday';

  if (isTodayMonday()) {
    postToChannel(text, channel);
  }
};

blastHappyMonday();
