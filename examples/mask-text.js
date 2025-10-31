import Badwords from '../src/Badwords.js';

const filter = new Badwords({ language: 'en' });

const text = 'You are a fool';
const cleaned = filter.clean(text);

console.log('Original:', text);
console.log('Cleaned:', cleaned);
