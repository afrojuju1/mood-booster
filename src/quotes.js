const axios = require('axios');

/*
sample response
 {
  quote: 'Stress is like a pulse, if you have it you’re alive.',
  length: '59',
  author: 'Steve Maraboli',
  tags: [ 'being-alive', 'inspire', 'stress', 'tod' ],
  category: 'inspire',
  date: '2019-08-27',
  permalink: 'https://theysaidso.com/quote/steve-maraboli-stress-is-like-a-pulse-if-you-have-it-youre-alive',
  title: 'Inspiring Quote of the day',
  background: 'https://theysaidso.com/img/bgs/man_on_the_mountain.jpg',
  id: '5p6wMGj72uOLUuOZCaX_wQeF'
}
 */
const getQuoteOfTheDay = () => {
  const url = 'https://quotes.rest/qod?category=inspire';
  const config = {
    headers: {
      'Accept': 'application/json',
    },
  };

  axios.get(url, config)
    .then((response) => {
      const quotes = response.data.contents.quotes;
      console.log('response: ', quotes[0]);
      return quotes[0];
    })
    .catch(() => {
      console.error('Failed to get quote');
    })
};

/*
Sample
{
  quoteText: 'What we see depends mainly on what we look for. ',
  quoteAuthor: 'John Lubbock',
  senderName: '',
  senderLink: '',
  quoteLink: 'http://forismatic.com/en/dec00db2e6/'
}
*/
const getRandomQuote = () => {
  // todo: what does the key correspond to???
  const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=&lang=en&key=1234';
  return axios.post(url)
    .then((response) => {
      console.log('response: ', response.data);
      return response.data
    })
    .catch((error) => {
      console.error('Failed to get quote', error.response);
    })
};

module.exports = {
  getRandomQuote,
  getQuoteOfTheDay,
};
