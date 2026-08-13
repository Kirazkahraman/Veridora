const http = require('http');
const options = {
  hostname: '127.0.0.1',
  port: 3001,
  path: '/',
  method: 'GET',
};
const req = http.request(options, (res) => {
  console.log('status', res.statusCode);
  console.log('headers', res.headers);
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    console.log('body-length', data.length);
    console.log(data.slice(0, 500));
  });
});
req.on('error', (err) => {
  console.error('request-error', err.message);
});
req.end();
