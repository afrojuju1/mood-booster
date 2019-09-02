const { postToChannel, isWeekDay } = require('./utils');
const { getQuoteOfTheDay } = require('./quotes');

const postQuote = async () => {
  if (!isWeekDay()) {
    console.log('Not a weekday. Skipping post for today.');
    return
  }

  const quote = await getQuoteOfTheDay();
  const { quoteText, quoteAuthor } = quote;
  if (!quoteText) {
    console.error('Failed to fetch a quote to post :(.');
    return
  }

  const channel = 'monday';
  const text = `${quoteText}\n- ${quoteAuthor || 'Unknown'}`;
  postToChannel(text, channel);
};

postQuote();
