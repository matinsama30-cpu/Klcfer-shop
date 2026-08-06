نام فایل: server.js

متن:
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('🚀 KLCFER Shop');
});

app.listen(3000, () => {
  console.log('✅ Server اجرا شد');
});
