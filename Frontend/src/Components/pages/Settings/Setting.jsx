import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { AddMembers, CropMaster, Members, UserDetails, UserProfile, FarmSettings, LanguageSettings } from './utility';
import DeviceSettings from './DeviceSettings';
import { useTranslation } from '../../../hooks/useTranslation';

const Component = styled(Box)`
  margin-top: 9%;
  margin-left: 1%;
  justify-content: center;
  height: auto;
  margin-bottom: 2% !important;

  @media (max-width: 768px) {
    margin-top: 72px;
    margin-left: 0;
    padding: 0 4px;
  }

  @media (max-width: 480px) {
    margin-top: 62px;
  }
`;

const Header = styled(Box)`
  margin: 3%;
  border-bottom: 2px solid lightgray;

  @media (max-width: 768px) {
    margin: 12px 12px 0 12px;
  }
`;

const MidSection = styled(Box)`
  margin: 3%;

  @media (max-width: 768px) {
    margin: 16px 12px;
  }
`;

/* Scrollable tab strip — hides scrollbar visually but remains functional */
const Navbar = styled(Box)`
  display: flex;
  gap: 30px;
  color: gray;
  margin-top: 2%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 6px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    gap: 18px;
    margin-top: 10px;
  }
`;

const NavItem = styled(Typography)`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 15px;

  ${(props) => props.$isActive ? `
    color: #333;
    font-weight: 600;
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #333;
    }
  `: ""}

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

// Tab key → translation key mapping
const NAV_TABS = [
  { key: 'User Details',     i18nKey: 'settings.userDetails'    },
  { key: 'Members',          i18nKey: 'settings.members'        },
  { key: 'Add Member',       i18nKey: 'settings.addMember'      },
  { key: 'Crop Master',      i18nKey: 'settings.cropMaster'     },
  { key: 'User Profile',     i18nKey: 'settings.userProfile'    },
  { key: 'Farm Settings',    i18nKey: 'settings.farmSettings'   },
  { key: 'Device Settings',  i18nKey: 'settings.deviceSettings' },
  { key: 'Language',         i18nKey: 'settings.language'       },
];

function Setting() {
  const location = useLocation();
  const { t } = useTranslation();

  const initialSelectedKey = NAV_TABS[location.state?.selectedItem]?.key || NAV_TABS[0].key;
  const [selectedKey, setSelectedKey] = useState(initialSelectedKey);

  return (
    <Component>
      <Header>
        <Typography sx={{ fontSize: { xs: 22, sm: 30 }, fontWeight: 600 }}>
          {t('settings.title')}
        </Typography>
        <Navbar>
          {NAV_TABS.map((tab) => (
            <NavItem
              key={tab.key}
              $isActive={selectedKey === tab.key}
              onClick={() => setSelectedKey(tab.key)}
            >
              {t(tab.i18nKey)}
            </NavItem>
          ))}
        </Navbar>
      </Header>

      <MidSection>
        {selectedKey === 'User Details'    && <UserDetails />}
        {selectedKey === 'Members'         && <Members />}
        {selectedKey === 'Add Member'      && <Box sx={{ justifyContent: 'center', display: 'flex' }}><AddMembers /></Box>}
        {selectedKey === 'Crop Master'     && <CropMaster />}
        {selectedKey === 'User Profile'    && <UserProfile />}
        {selectedKey === 'Farm Settings'   && <FarmSettings />}
        {selectedKey === 'Device Settings' && <DeviceSettings />}
        {selectedKey === 'Language'        && <LanguageSettings />}
      </MidSection>
    </Component>
  );
}

export default Setting;
