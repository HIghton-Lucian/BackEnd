const axios = require('axios');
require("dotenv").config();

async function text_gpts(text) {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const requestData = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `${text}`,
      }
    ]
  };

  const response = await axios.post(apiUrl, requestData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });
  result = response.data.choices[0].message.content;
  return result;
}

module.exports = text_gpts;
