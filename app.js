const express = require('express');
const moment = require('moment');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name || 'ketchakaren';
  const track = req.query.track || 'backend';

  const current_day = moment().format('dddd');
  const utc_time = moment().utc().format();

  // Get GitHub URLs
  const github_file_url = `https://github.com/leonelta/tasks/blob/master/app.js`;
  const github_repo_url = 'https://github.com/leonelta/tasks';

  // Prepare response JSON
  const response = {
    slack_name: slackName,
    current_day,
    utc_time,
    track: track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  return res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});