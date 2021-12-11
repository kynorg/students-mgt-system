import path from 'path';
import morgan from 'morgan';
import express from 'express';
import { User } from '../db/models';

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(path.resolve(__dirname, '..', 'api', 'public')));

app.post('/greet', async (req, res) => {
  const user = await User.create({ username: 'Abdulfatai2', password: 'testpassword2' })
  const count = await User.count();

  res.end(`Request was handled successfully - ${user.id} - ${count}`);
});

export default app;
