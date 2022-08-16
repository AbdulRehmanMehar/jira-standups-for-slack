const { PORT } = process.env;
const http = require('http');
const slackApp = require('./slack');

const server = http.createServer();

server.listen(PORT || 3000, async () => {
  await slackApp.start(PORT || 3000);

  console.log('⚡️ Bolt app is running!');
});
