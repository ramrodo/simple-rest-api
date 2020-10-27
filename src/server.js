import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/covid', routes.covid);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`),
);

module.exports = app;
