import assert from 'assert';
import { loadLanguageWords } from '../src/utils/fileLoader.js';

const langs = loadLanguageWords('list');
assert.ok(Array.isArray(langs), 'Language list should be an array');
assert.ok(langs.includes('en'), 'English dataset should exist');

const enWords = loadLanguageWords('en');
assert.ok(enWords.length > 0, 'English word list should not be empty');
assert.ok(typeof enWords[0] === 'string', 'Word should be string');

console.log('datasetLoader.test.js passed');
