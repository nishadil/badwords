import Badwords from '../src/Badwords.js';

const langs = ['en', 'hi', 'es', 'fr'];

for (const lang of langs) {
  const filter = new Badwords({ language: lang });
  console.log(`🌐 Language: ${lang}`);
  console.log('Has bad words (sample):', filter.hasBadWords('sala'));
  console.log('Cleaned:', filter.clean('sala'));
  console.log('---');
}
