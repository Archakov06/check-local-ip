const request = require('request');

const check = (ip, port = [3000]) => {
  for (var i = 0; i < port.length; i++) {
    const adress = `http://${ip}:${port[i]}/`;
    request
      .head(adress, { timeout: 500 })
      .on('response', response => console.log(`${adress} - OK`))
      .on('error', () => {});
  }
};

for (var i = 0; i < 2; i++) {
  for (var o = 0; o < 120; o++) {
    check(`192.168.${i}.${o}`, [3000, 8080, 80]);
  }
}
