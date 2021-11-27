import path from 'path';
import morgan from 'morgan';
import express from 'express';

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(path.resolve(__dirname, '..', 'api', 'public')));

app.post('/greet', (req, res) => {
  console.log(req.body);

  res.end('Request was handled successfully');
});

export default app;
