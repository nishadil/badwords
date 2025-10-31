import { loadLanguageWords } from './utils/fileLoader.js';
import { maskWord } from './utils/textUtils.js';

export default class Badwords {
  constructor({ language = 'en', customWords = [] } = {}) {
    this.language = language;
    this.words = new Set(loadLanguageWords(language));
    this.customWords = new Set(customWords.map(w => w.toLowerCase()));
  }

  hasBadWords(text) {
    const words = text.toLowerCase().split(/\W+/);
    return words.some(word => this.words.has(word) || this.customWords.has(word));
  }

  clean(text, maskChar = '*') {
    return text
      .split(/\b/)
      .map(token =>
        this.words.has(token.toLowerCase()) || this.customWords.has(token.toLowerCase())
          ? maskWord(token, maskChar)
          : token
      )
      .join('');
  }

  addWords(newWords = []) {
    newWords.forEach(word => this.customWords.add(word.toLowerCase()));
  }

  removeWords(wordsToRemove = []) {
    wordsToRemove.forEach(word => this.customWords.delete(word.toLowerCase()));
  }

  listLanguages() {
    return loadLanguageWords('list');
  }
}
