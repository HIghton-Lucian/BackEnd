const axios = require('axios');
require("dotenv").config();

async function img_gpts(text) {
  const apiUrl = 'https://api.openai.com/v1/images/generations';
  const requestData = {
    model: 'dall-e-2',
    prompt: text,
    n: 1,
    size: '1024x1024',
  };

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    const img_url = response.data.data[0].url;
    return img_url;

}
module.exports = img_gpts;
