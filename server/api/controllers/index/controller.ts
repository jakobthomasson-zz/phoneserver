import IndexService from '../../services/index.service'

import { Request, Response } from 'express';

export class Controller {
  all(req: Request, res: Response): void {
    // res.render('index', { title: 'Express', body: 'hej johan' }); pug
    res.send('respond with a resource');
    // IndexService.all().then(r => res.json(r));
  }
}
export default new Controller();
