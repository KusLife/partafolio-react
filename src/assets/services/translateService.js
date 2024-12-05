// src/services/translateService.js
import axios from 'axios';

const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate';
const API_KEY = 'YOUR_DEEPL_API_KEY'; // Replace with your actual DeepL API key

export const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(
      DEEPL_API_URL,
      new URLSearchParams({
        auth_key: API_KEY,
        text: text,
        target_lang: targetLang.toUpperCase(), // e.g., 'EN', 'ES', 'UK'
      })
    );

    return response.data.translations[0].text;
  } catch (error) {
    console.error('Translation API error:', error);
    return text; // Fallback to original text in case of error
  }
};
