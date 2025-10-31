import assert from 'assert';
import Badwords from '../src/Badwords.js';

const filter = new Badwords({ language: 'en' });

const input = 'You are a fool';
const output = filter.clean(input);

assert.notStrictEqual(input, output);
assert.ok(output.includes('*'));

console.log('cleanText.test.js passed');
