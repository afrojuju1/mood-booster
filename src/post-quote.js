const { postToChannel } = require('./utils');
const { getRandomQuote } = require('./quotes');

const postQuote = async () => {
  const quote = await getRandomQuote();
  const channel = 'temp_slack_bot';
  const text = `${quote.quoteText}\n- ${quote.quoteAuthor}`;

  postToChannel(text, channel);
};

postQuote();
