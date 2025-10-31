import fs from 'fs';
import path from 'path';

const datasetPath = path.resolve('node_modules/@datasiz/badwords-dataset/data');

if (!fs.existsSync(datasetPath)) {
  console.error('Dataset not found! Please install it using:');
  console.error('npm install @datasiz/badwords-dataset');
  process.exit(1);
}

const files = fs.readdirSync(datasetPath).filter(f => f.endsWith('.txt'));

console.log('Dataset verified.');
console.log('Available languages:', files.map(f => f.replace('.txt', '')).join(', '));
