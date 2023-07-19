const { execFile } = require('child_process');
// runing previously chmod u+x processNodejsImage.sh
execFile(__dirname+'/test.sh', (error, stdout, stderr) => {
    if (!stderr) {
    console.log(stdout);
  } else {
    throw stderr
  }
});