import { englishMessages, vietnameseMessages } from 'admin-on-rest';
import englishResourceMessages from './en';
const messages = {
  en: { ...englishMessages, ...englishResourceMessages },
};

export default messages;
