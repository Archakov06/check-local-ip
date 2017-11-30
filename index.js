const request = require('request');

const check = (ip, port = 3000) =>
  request
    .head(`http://${ip}:${port}/`, { timeout: 500 })
    .on('response', function(response) {
      console.log(`http://${ip}:${port}/ - OK`);
    })
    .on('error', function(response) {});

for (var i = 0; i < 2; i++) {
  for (var o = 0; o < 120; o++) {
    check(`192.168.${i}.${o}`);
  }
}
