#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const { getInstalledPathSync } = require('get-installed-path')
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

let installPath;

try {
  installPath = getInstalledPathSync('kie');
} catch (err) {
  console.error(err);
}

const child = spawn('npm', ['run', 'prod'], {
  cwd: installPath,
});

child.stdout.setEncoding('utf8');

child.stdout.on('data', (chunk) => {
  if (chunk.includes('Server running at')) {
    process.stdout.write(chunk);
  }
});