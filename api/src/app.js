import path from 'path';
import morgan from 'morgan';
import express from 'express';
import { greetController } from './controllers';

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(path.resolve(__dirname, '..', 'api', 'public')));

app.post('/greet', greetController);

export default app;
