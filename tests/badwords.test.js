import assert from 'assert';
import Badwords from '../src/Badwords.js';

const filter = new Badwords({ language: 'en' });

assert.strictEqual(filter.hasBadWords('you are nice'), false);
assert.strictEqual(filter.hasBadWords('you are an idiot'), true);

console.log('badwords.test.js passed');
