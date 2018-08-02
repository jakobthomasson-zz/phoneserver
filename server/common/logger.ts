import * as pino from 'pino';

console.log('');
console.log('');

console.log('');
console.log('');
console.log('');
console.log('');
console.log('');
console.log('');
console.log(process.env.LOG_LEVEL)
const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
});

export default l;
