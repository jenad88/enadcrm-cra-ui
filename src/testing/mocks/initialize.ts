import { IS_SERVER } from '../../config/constants';
import { seedDb } from './seed-db';

const initializeMocks = () => {
  console.log('initializeMocks')
  if (IS_SERVER) {
    console.log('initializeMocks IS_SERVER')
    const { server } = require('./server');
    server.listen();
  } else {
    console.log('initializeMocks IS_BROWSER')
    const { worker } = require('./browser');
    worker.start();
  }
  console.log('initializeMocks seedDb')
  seedDb();
};

initializeMocks();