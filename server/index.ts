import express from 'express';
import Router from './routes';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', Router);

export default app;
