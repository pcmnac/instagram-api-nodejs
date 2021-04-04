const express = require('express')
var cors = require('cors')
const api = require('./api');
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

app.get('/api/user', async (req, res, next) => {
  try {
    const { query: { token } } = req;
    const [profile, media] = await Promise.all([
      api.getUserProfile(token),
      api.getRecentMedia(token),
    ]);

    res.json({
      profile,
      media,
    });
  } catch (e) {
    next(e);
  }
})

app.listen(port , () => {
  console.log(`Server listening at port ${port}`)
})