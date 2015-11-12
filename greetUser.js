var os = require('os');
var NODE_VERSION = process.version;
var MACHINE = outputMachine(process.platform);
var USER = process.env.USER || os.hostname();
console.log(
  'Hello %s running Node %s on a %s machine!',
  USER,
  NODE_VERSION,
  MACHINE
);

function outputMachine(platform) {
  var machine = null;
  switch (true) {
    case platform === 'darwin':
      machine = 'Mac';
      break;
    case platform === 'win32':
      machine = 'Windows';
      break;
    case platform === 'sunos':
    case platform === 'freebsd':
      machine = 'Unix';
      break;
    case platform === 'linux':
      machine = 'Linux';
      break;
    default:
      machine = 'not recognized, please send a Pull Request!';
      break;
  }

  return machine;
}
