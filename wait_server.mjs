import http from 'http';
function check() {
  http.get('http://localhost:4321', (res) => {
    if (res.statusCode === 200) {
      console.log('Server is ready');
      process.exit(0);
    } else {
      setTimeout(check, 1000);
    }
  }).on('error', (e) => {
    setTimeout(check, 1000);
  });
}
check();
