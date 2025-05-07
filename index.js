const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;

app.use(
  cors({
    origin: ['https://test-app-6yg6.onrender.com/', '*'],
    credentials: true
  })
);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/post', (req, res) => {
  res.send('포스트 왔음 B')
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
