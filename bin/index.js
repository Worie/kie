#!/usr/bin/env node

const { execSync, spawn } = require( 'child_process');
const { argv } = require('yargs');

Object.keys(argv).filter(arg => {
  return !(
    arg === '_' ||
    arg === 'help' ||
    arg === 'version' ||
    arg === '$0'
  );
}).forEach(arg => {
  execSync(`npm config set kie:${arg} ${argv[arg]}`);
});

const child = spawn('npm', ['run', 'prod']);

child.stdout.setEncoding('utf8');
child.stdout.on('data', (chunk) => {
  if (chunk.includes('Server running at')) {
    process.stdout.write(chunk);
  }
});

//const updateEnv => ()
//
//exec('npm', (err, stdout, stderr) => {
//  if (err) {
//    // node couldn't execute the command
//    return;
//  }
//
//  // the *entire* stdout and stderr (buffered)
//  console.log(`stdout: ${stdout}`);
//  console.log(`stderr: ${stderr}`);
//});
//
//"echo \"$npm_package_config_foo\" && npm config set kie:foo "
