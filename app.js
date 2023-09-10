const express = require('express');
const moment = require('moment');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name || 'ketchakaren';
  const track = req.query.track || 'backend';

  const current_Day = moment().format('dddd');
  const UTC_Time = moment().utc().format();

  // Get GitHub URLs
  const github_file_URL = `https://github.com/leonelta/tasks/blob/master/app.js`;
  const github_repo_URL = 'https://github.com/leonelta/tasks';

  // Prepare response JSON
  const response = {
    slack_name: slackName,
    current_Day,
    UTC_Time,
    track: track,
    github_file_URL,
    github_repo_URL,
    statusCode: 200,
  };

  return res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});