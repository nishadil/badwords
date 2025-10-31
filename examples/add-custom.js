import Badwords from '../src/Badwords.js';

const filter = new Badwords({ language: 'en' });

filter.addWords(['dumbhead']);

const text = 'You dumbhead!';
console.log('Input:', text);
console.log('Contains bad words?', filter.hasBadWords(text));
console.log('Cleaned:', filter.clean(text));
