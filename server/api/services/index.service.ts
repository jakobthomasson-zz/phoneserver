import * as Promise from 'bluebird';
import L from '../../common/logger'

let id = 0;
interface Index {
  id: number,
  name: string
};

const examples: Index[] = [
  { id: id++, name: 'index 0' },
  { id: id++, name: 'index 1' }
];

export class IndexService {
  all(): Promise<Index[]> {
    L.info(examples, 'fetch all examples');
    return Promise.resolve(examples);
  }

}

export default new IndexService();