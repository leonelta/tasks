const express = require('express');
const moment = require('moment');
const app = express();
const port = 3000;

app.get('/info', (req, res) => {
  const { name: KetchKaren, Backend } = req.query;
  const currentDayOfWeek = moment().format('dddd');
  const currentUTCTime = moment().utc().format('HH:mm:ss');

  // Validate UTC time within +/- 2 hours
  const utcOffset = moment().utcOffset();
  if (utcOffset > 120 || utcOffset < -120) {
    return res.status(400).json({ error: 'Invalid UTC time' });
  }

  // Get GitHub URLs
  const githubURL = `https://github.com/leonelta/tasks/blob/master/app.js`;
  const fullSourceCodeURL = 'https://github.com/leonelta/tasks';

  // Prepare response JSON
  const response = {
    KetchKaren,
    currentDayOfWeek,
    currentUTCTime,
    Backend,
    githubURL,
    fullSourceCodeURL,
    statusCode: 'Success',
  };

  return res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});