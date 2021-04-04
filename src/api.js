const axios = require('axios');

const INSTAGRAM_API_URL = 'https://graph.instagram.com';
const INSTAGRAM_USER_PROFILE_URL = `${INSTAGRAM_API_URL}/me`;
const INSTAGRAM_USER_MEDIA_URL = `${INSTAGRAM_USER_PROFILE_URL}/media`;

const getRecentMedia = async (userToken) => {
  const response = await axios.get(INSTAGRAM_USER_MEDIA_URL, {
    params: {
      fields: 'username,id,caption,media_type,media_url,permalink,thumbnail_url,timestamp',
      access_token: userToken,
    },
  });

  return response.data.data;
};

const getUserProfile = async (userToken) => {
  const response = await axios.get(INSTAGRAM_USER_PROFILE_URL, {
    params: {
      fields: 'id,username,account_type,media_count',
      access_token: userToken,
    },
  });

  return response.data;
};

module.exports = {
  getRecentMedia,
  getUserProfile,
};
