const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;

app.use(
  cors({
    origin: ['https://8c29-1-235-113-2.ngrok-free.app', '*'],
    credentials: true
  })
);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/post', (req, res) => {
  res.send(req.body)
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
