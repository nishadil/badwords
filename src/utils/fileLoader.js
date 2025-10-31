import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const datasetPath = path.resolve(
  __dirname,
  '../../../node_modules/@datasiz/badwords-dataset/data'
);

export function loadLanguageWords(language) {
  if (language === 'list') {
    try {
      return fs
        .readdirSync(datasetPath)
        .filter(file => file.endsWith('.txt'))
        .map(file => file.replace('.txt', ''));
    } catch {
      return [];
    }
  }

  const filePath = path.join(datasetPath, `${language}.txt`);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Dataset not found for language: ${language}`);
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf8');
  return content
    .split('\n')
    .map(w => w.trim().toLowerCase())
    .filter(Boolean);
}
