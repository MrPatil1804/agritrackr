import { useSelector } from 'react-redux';
import { translations } from '../translations/index.js';

/**
 * useTranslation — lightweight hook for dashboard translations.
 *
 * Usage:
 *   const { t, language } = useTranslation();
 *   <span>{t('dash.soilMoisture')}</span>
 *
 * Falls back to English if a key is missing in the active language.
 */
export function useTranslation() {
  const language = useSelector((state) => state.language?.language || 'en');

  const t = (key) => {
    const langMap = translations[language] || translations['en'];
    return langMap[key] ?? translations['en'][key] ?? key;
  };

  return { t, language };
}

export default useTranslation;
