// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const { PORT } = process.env;
const http = require('http');
const slackApp = require('./slack');
const expressApp = require('./express');

const server = http.createServer(expressApp);

server.listen(PORT || 3000, async () => {
  await slackApp.start(PORT || 3000);

  console.log('⚡️ Bolt app is running!');
});
