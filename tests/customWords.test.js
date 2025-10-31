import assert from 'assert';
import Badwords from '../src/Badwords.js';

const filter = new Badwords({ language: 'en' });

filter.addWords(['dummy']);
assert.strictEqual(filter.hasBadWords('You dummy!'), true);

filter.removeWords(['dummy']);
assert.strictEqual(filter.hasBadWords('You dummy!'), false);

console.log('customWords.test.js passed');
