const { postToChannel } = require('./utils');
const { getQuoteOfTheDay } = require('./quotes');

const postQuote = async () => {
  const quote = await getQuoteOfTheDay();
  const { quoteText, quoteAuthor } = quote;
  if (!quoteText) {
    console.error('Failed to fetch a quote to post :(.');
    return
  }

  const channel = 'temp_slack_bot';
  const text = `${quoteText}\n- ${quoteAuthor || 'Unknown'}`;
  postToChannel(text, channel);
};

postQuote();
