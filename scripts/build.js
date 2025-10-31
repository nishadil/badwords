import { execSync } from 'child_process';

console.log('Building @nishadil/badwords...');

try {
  execSync('npm run test', { stdio: 'inherit' });
  console.log('Tests passed.');
} catch {
  console.error('Tests failed. Build aborted.');
  process.exit(1);
}

console.log('Preparing package for npm publish...');
execSync('npm pack', { stdio: 'inherit' });

console.log('Build complete!');
