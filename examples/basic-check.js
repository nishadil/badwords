import Badwords from '../src/Badwords.js';

const filter = new Badwords({ language: 'en' });

const text = 'You are an idiot';
console.log('Input:', text);
console.log('Contains bad words?', filter.hasBadWords(text));
