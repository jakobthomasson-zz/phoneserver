import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router'
import indexRouter from './api/controllers/index/router'
import usersRouter from './api/controllers/users/router';


export default function routes(app: Application): void {
  app.use('/api1/v1/examples', examplesRouter);
  app.use('/api1/v1/index', indexRouter);
  app.use('/api1/v1/users', usersRouter);
  
};