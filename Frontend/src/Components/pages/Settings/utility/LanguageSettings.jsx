import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { setLanguage } from '../../../../redux/languageSlice';
import { useTranslation } from '../../../../hooks/useTranslation';

/* ────────────────────────── animations ────────────────────────── */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0);   }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(76, 175, 80, 0);  }
`;

/* ────────────────────────── styled components ──────────────────── */
const Wrapper = styled(Box)`
  animation: ${fadeIn} 0.35s ease;
`;

const SectionHeader = styled(Box)`
  border-bottom: 2px solid #e8f5e9;
  padding-bottom: 20px;
  margin-bottom: 32px;
`;

const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 36px;
`;

const LanguageCard = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 24px;
  border-radius: 16px;
  border: 2px solid ${({ $active }) => ($active ? '#4caf50' : '#e0e0e0')};
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%)'
      : '#fff'};
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ $active }) =>
    $active ? '0 4px 16px rgba(76,175,80,0.18)' : '0 2px 8px rgba(0,0,0,0.06)'};
  animation: ${({ $active }) => ($active ? pulse : 'none')} 2s infinite;

  &:hover {
    border-color: #66bb6a;
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.22);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #4caf50;
    outline-offset: 2px;
  }
`;

const FlagBadge = styled.div`
  font-size: 40px;
  line-height: 1;
  flex-shrink: 0;
  filter: ${({ $active }) => ($active ? 'none' : 'grayscale(30%)')};
  transition: filter 0.25s;
`;

const LangInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
`;

const LangName = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? '#2e7d32' : '#333')};
  transition: color 0.2s;
`;

const LangNative = styled.span`
  font-size: 13px;
  color: ${({ $active }) => ($active ? '#4caf50' : '#888')};
  transition: color 0.2s;
`;

const ActiveBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 12px;
  background: #4caf50;
  color: white;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: uppercase;
`;

/* ── "More Languages" card — matches LanguageCard dimensions exactly ── */
const MoreCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 20px 24px;
  border-radius: 16px;
  border: 2px dashed #b0bec5;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  position: relative;

  &:hover {
    border-color: #78909c;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);
  }
`;

const MoreCardLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MoreCardTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #444;
`;

const MoreCardSub = styled.span`
  font-size: 12px;
  color: #888;
  margin-top: 1px;
  display: block;
`;

const GlobeIcon = styled.div`
  font-size: 36px;
  line-height: 1;
  flex-shrink: 0;
  filter: grayscale(20%);
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 9px 12px;
  border-radius: 10px;
  border: 1.5px solid #cfd8dc;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  background: #fff;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: #4caf50;
  }

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);
  }
`;

/* Added-language pill shown below the grid */
const AddedSection = styled.div`
  margin-bottom: 28px;
`;

const AddedSectionTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 12px;
`;

const PreviewBox = styled(Box)`
  background: linear-gradient(135deg, #f9fbe7 0%, #f1f8e9 100%);
  border: 1.5px solid #c8e6c9;
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  animation: ${fadeIn} 0.4s ease;
`;

const PreviewIcon = styled.div`
  font-size: 28px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const SaveToast = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  animation: ${fadeIn} 0.3s ease;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.35);
`;

const RemoveBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ef9a9a;
  color: #c62828;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #e57373;
    transform: scale(1.1);
  }
`;

/* ────────────────────────── language data ──────────────────────── */
const LANGUAGE_OPTIONS = [
  {
    code: 'en',
    name: 'English',
    native: 'English',
    flag: '🇬🇧',
    region: 'International',
  },
  {
    code: 'hi',
    name: 'Hindi',
    native: 'हिन्दी',
    flag: '🇮🇳',
    region: 'भारत',
  },
  {
    code: 'mr',
    name: 'Marathi',
    native: 'मराठी',
    flag: '🇮🇳',
    region: 'महाराष्ट्र',
  },
];

const MORE_LANGUAGE_OPTIONS = [
  { code: 'bn', name: 'Bengali',   native: 'বাংলা',      flag: '🇮🇳', region: 'West Bengal / Bangladesh' },
  { code: 'te', name: 'Telugu',    native: 'తెలుగు',     flag: '🇮🇳', region: 'Andhra Pradesh / Telangana' },
  { code: 'ta', name: 'Tamil',     native: 'தமிழ்',      flag: '🇮🇳', region: 'Tamil Nadu' },
  { code: 'gu', name: 'Gujarati',  native: 'ગુજરાતી',    flag: '🇮🇳', region: 'Gujarat' },
  { code: 'kn', name: 'Kannada',   native: 'ಕನ್ನಡ',      flag: '🇮🇳', region: 'Karnataka' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം',     flag: '🇮🇳', region: 'Kerala' },
  { code: 'pa', name: 'Punjabi',   native: 'ਪੰਜਾਬੀ',     flag: '🇮🇳', region: 'Punjab' },
];

/* ────────────────────────── component ─────────────────────────── */
function LanguageSettings() {
  const dispatch = useDispatch();
  const { t, language } = useTranslation();

  const [showSaved, setShowSaved]   = useState(false);
  const [addedCodes, setAddedCodes] = useState([]);
  const [dropdownValue, setDropdownValue] = useState('');   // controlled select

  /* ── helpers ── */
  const handleSelect = (code) => {
    if (code === language) return;
    dispatch(setLanguage(code));
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2500);
  };

  const handleDropdownChange = (e) => {
    const code = e.target.value;
    if (!code) return;
    // prevent duplicate
    if (addedCodes.includes(code)) return;

    // 1. Add card to grid
    setAddedCodes((prev) => [...prev, code]);
    // 2. Activate the selected language immediately (dispatch directly to avoid stale closure)
    dispatch(setLanguage(code));
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2500);
    // 3. Reset the controlled select back to placeholder
    setDropdownValue('');
  };

  const handleRemoveAdded = (code) => {
    setAddedCodes((prev) => prev.filter((c) => c !== code));
    // if this removed language was active, fall back to English
    if (language === code) {
      dispatch(setLanguage('en'));
    }
  };

  // build full list for added cards
  const addedOptions = addedCodes
    .map((code) => MORE_LANGUAGE_OPTIONS.find((l) => l.code === code))
    .filter(Boolean);

  // available options for the dropdown = those NOT yet added
  const dropdownOptions = MORE_LANGUAGE_OPTIONS.filter(
    (l) => !addedCodes.includes(l.code)
  );

  // all languages that should render as a card (base 3 + added extras)
  const allCards = [...LANGUAGE_OPTIONS, ...addedOptions];

  const activeOption =
    allCards.find((l) => l.code === language) || LANGUAGE_OPTIONS[0];

  return (
    <Wrapper>
      {/* Header */}
      <SectionHeader>
        <Typography sx={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a' }}>
          {t('lang.title')}
        </Typography>
        <Typography sx={{ fontSize: 14, color: '#666', mt: 0.5 }}>
          {t('lang.subtitle')}
        </Typography>
      </SectionHeader>

      {/* Language cards grid — base 3 + added extras + More Languages card */}
      <LanguageGrid role="radiogroup" aria-label="Language selection">

        {/* ── existing cards (EN / HI / MR) + dynamically added cards ── */}
        {allCards.map((lang) => {
          const isActive  = lang.code === language;
          const isExtra   = addedCodes.includes(lang.code);
          return (
            <LanguageCard
              key={lang.code}
              $active={isActive}
              onClick={() => handleSelect(lang.code)}
              role="radio"
              aria-checked={isActive}
              id={`lang-option-${lang.code}`}
            >
              {isActive && <ActiveBadge>✓ Active</ActiveBadge>}

              {/* Remove button only for extra (dropdown-added) languages */}
              {isExtra && !isActive && (
                <RemoveBtn
                  title="Remove language"
                  onClick={(e) => { e.stopPropagation(); handleRemoveAdded(lang.code); }}
                  aria-label={`Remove ${lang.name}`}
                >
                  ×
                </RemoveBtn>
              )}
              {isExtra && isActive && (
                <RemoveBtn
                  title="Remove language"
                  onClick={(e) => { e.stopPropagation(); handleRemoveAdded(lang.code); }}
                  aria-label={`Remove ${lang.name}`}
                  style={{ top: 32 }}
                >
                  ×
                </RemoveBtn>
              )}

              <FlagBadge $active={isActive}>{lang.flag}</FlagBadge>
              <LangInfo>
                <LangName $active={isActive}>{lang.native}</LangName>
                <LangNative $active={isActive}>
                  {lang.name} · {lang.region}
                </LangNative>
              </LangInfo>
            </LanguageCard>
          );
        })}

        {/* ── More Languages card (dropdown) — always last in grid ── */}
        {dropdownOptions.length > 0 && (
          <MoreCard>
            <MoreCardLabel>
              <GlobeIcon>🌐</GlobeIcon>
              <div>
                <MoreCardTitle>More Languages</MoreCardTitle>
                <MoreCardSub>Add another Indian language</MoreCardSub>
              </div>
            </MoreCardLabel>

            <StyledSelect
              value={dropdownValue}
              onChange={handleDropdownChange}
              aria-label="Select additional language"
              id="more-languages-select"
            >
              <option value="" disabled>
                Select a language…
              </option>
              {dropdownOptions.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.native} — {lang.name}
                </option>
              ))}
            </StyledSelect>
          </MoreCard>
        )}
      </LanguageGrid>

      {/* Success toast */}
      {showSaved && (
        <SaveToast>
          <span>✓</span>
          <span>{t('lang.saved')}</span>
        </SaveToast>
      )}

      {/* Preview block */}
      <PreviewBox>
        <PreviewIcon>🌱</PreviewIcon>
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: '#4caf50', textTransform: 'uppercase', letterSpacing: 0.8, mb: 0.5 }}>
            {t('lang.preview')} — {activeOption?.native}
          </Typography>
          <Typography sx={{ fontSize: 15, color: '#333', fontWeight: 500 }}>
            {t('lang.previewText')}
          </Typography>
          <Typography sx={{ fontSize: 13, color: '#777', mt: 0.5 }}>
            🇬🇧 Soil health monitoring dashboard is active. &nbsp;|&nbsp;
            🇮🇳 मिट्टी स्वास्थ्य निगरानी डैशबोर्ड सक्रिय है। &nbsp;|&nbsp;
            🇮🇳 माती आरोग्य देखरेख डॅशबोर्ड सक्रिय आहे।
          </Typography>
        </Box>
      </PreviewBox>
    </Wrapper>
  );
}

export default LanguageSettings;
