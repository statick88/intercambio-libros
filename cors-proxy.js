import { createServer } from 'cors-anywhere';

const host = '0.0.0.0';
const port = 8080;

createServer({
  originWhitelist: [], 
}).listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
