import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.set('port', 3000);

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  return res.status(404).send('Not found');
});

// eslint-disable-next-line no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).send('Internal Server Error');
});

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
