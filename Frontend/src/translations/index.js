/**
 * Translations for the AgriTrackr dashboard.
 * Keys are short semantic identifiers; values are display strings.
 * Languages: en (English), hi (Hindi), mr (Marathi)
 *
 * NOTE: Landing page, Login, Register are NOT translated — English only.
 */

export const translations = {
  // ─── English ──────────────────────────────────────────────────────────────
  en: {
    // Sidebar nav
    'nav.miniDashboard': 'Mini-Dashboard',
    'nav.dashboard': 'Dashboard',
    'nav.tableView': 'Table View',
    'nav.report': 'Report',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',

    // Top-bar / Home
    'home.machineDown': 'Machine Down',
    'home.machineRunning': 'Machine Running',
    'home.dateRange': 'Date Range',
    'home.allDates': 'All Dates',

    // Dashboard page
    'dash.title': 'Dashboard',
    'dash.summaryOverview': 'Summary Overview',
    'dash.soilHealthScore': 'Soil Health Score',
    'dash.shiBasis': 'Based on weighted SHI formula',
    'dash.avgNutrientLevel': 'Avg Nutrient Level',
    'dash.allNutrientsCombined': 'All nutrients combined',
    'dash.soilMoisture': 'Soil Moisture',
    'dash.currentSoilMoisture': 'Current soil moisture',
    'dash.soilPhLevel': 'Soil pH Level',
    'dash.acidityAlkalinity': 'Acidity/alkalinity',
    'dash.soilTemperature': 'Soil Temperature',
    'dash.currentSoilTemp': 'Current soil temp',
    'dash.statusOverview': 'Status Overview',
    'dash.good': 'Good',
    'dash.warning': 'Warning',
    'dash.critical': 'Critical',
    'dash.environmentalConditions': 'Environmental Conditions',
    'dash.nutrientPerformance': 'Nutrient Performance Analysis',
    'dash.downloadCsvReport': 'Download CSV Report',
    'dash.loadingSoilData': 'Loading soil data...',

    // Metric labels (dashboard charts)
    'metric.soilMoisture': 'Soil Moisture',
    'metric.soilPh': 'Soil pH',
    'metric.soilTemperature': 'Soil Temperature',
    'metric.nitrogen': 'Nitrogen (N)',
    'metric.phosphorus': 'Phosphorus (P)',
    'metric.sulfur': 'Sulfur (S)',
    'metric.zinc': 'Zinc (Zn)',
    'metric.iron': 'Iron (Fe)',
    'metric.manganese': 'Manganese (Mn)',
    'metric.copper': 'Copper (Cu)',
    'metric.potassium': 'Potassium (K)',
    'metric.calcium': 'Calcium (Ca)',
    'metric.magnesium': 'Magnesium (Mg)',

    // Mini-Dashboard
    'mini.title': 'Mini-Dashboard',
    'mini.soilMoisture': 'Soil Moisture',
    'mini.phLevel': 'pH Level',
    'mini.temperature': 'Temperature',
    'mini.nutrientLevels': 'Nutrient Levels',
    'mini.latestReading': 'Latest Reading',
    'mini.sensorId': 'Sensor ID',
    'mini.time': 'Time',
    'mini.totalReadings': 'Total Readings',
    'mini.nitrogen': 'Nitrogen (N)',
    'mini.phosphorus': 'Phosphorus (P)',
    'mini.potassium': 'Potassium (K)',
    'mini.calcium': 'Calcium (Ca)',
    'mini.target': 'Target',
    'mini.npkNote': 'N (Nitrogen), P (Phosphorus), K (Potassium)',
    'mini.loadingSoilData': 'Loading soil data...',

    // Table View / Report
    'report.title': 'Table View',
    'report.downloadPdf': 'Download as PDF',
    'report.downloadExcel': 'Download as Excel',
    'report.downloadCsv': 'Download as CSV',

    // Settings page
    'settings.title': 'Settings',
    'settings.userDetails': 'User Details',
    'settings.members': 'Members',
    'settings.addMember': 'Add Member',
    'settings.cropMaster': 'Crop Master',
    'settings.userProfile': 'User Profile',
    'settings.farmSettings': 'Farm Settings',
    'settings.deviceSettings': 'Device Settings',
    'settings.language': 'Language',

    // User Details
    'userDetails.title': 'User details',
    'userDetails.subtitle': 'Update user personal details here',
    'userDetails.username': 'Username',
    'userDetails.email': 'Email',
    'userDetails.role': 'Role',
    'userDetails.companyName': 'Company Name',

    // Device Settings
    'device.title': 'Device Settings',
    'device.addDevice': 'Add Device',
    'device.noDevicesFound': 'No devices found',
    'device.noDevicesHint': 'Add your first device to get started with monitoring',
    'device.loading': 'Loading devices...',
    'device.addNewDevice': 'Add New Device',
    'device.editDevice': 'Edit Device',
    'device.deviceName': 'Device Name',
    'device.deviceId': 'Device ID',
    'device.deviceMode': 'Device Mode',
    'device.location': 'Location (Optional)',
    'device.description': 'Description (Optional)',
    'device.cancel': 'Cancel',
    'device.add': 'Add',
    'device.update': 'Update',
    'device.deviceIdLabel': 'Device ID',
    'device.locationLabel': 'Location',
    'device.surveyDevice': 'Survey Device',
    'device.fitAndForget': 'Fit & Forget Device',
    'device.deleteConfirm': 'Are you sure you want to delete this device?',

    // Language settings
    'lang.title': 'Language & Region',
    'lang.subtitle': 'Choose your preferred language for the dashboard',
    'lang.preview': 'Preview',
    'lang.previewText': 'Soil health monitoring dashboard is active.',
    'lang.saved': 'Language saved successfully!',
  },

  // ─── Hindi ────────────────────────────────────────────────────────────────
  hi: {
    // Sidebar nav
    'nav.miniDashboard': 'मिनी-डैशबोर्ड',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.tableView': 'तालिका दृश्य',
    'nav.report': 'रिपोर्ट',
    'nav.settings': 'सेटिंग्स',
    'nav.logout': 'लॉग आउट',

    // Top-bar / Home
    'home.machineDown': 'मशीन बंद',
    'home.machineRunning': 'मशीन चालू',
    'home.dateRange': 'तिथि सीमा',
    'home.allDates': 'सभी तिथियाँ',

    // Dashboard page
    'dash.title': 'डैशबोर्ड',
    'dash.summaryOverview': 'सारांश अवलोकन',
    'dash.soilHealthScore': 'मिट्टी स्वास्थ्य स्कोर',
    'dash.shiBasis': 'भारित SHI फॉर्मूले पर आधारित',
    'dash.avgNutrientLevel': 'औसत पोषक स्तर',
    'dash.allNutrientsCombined': 'सभी पोषक तत्व संयुक्त',
    'dash.soilMoisture': 'मिट्टी की नमी',
    'dash.currentSoilMoisture': 'वर्तमान मिट्टी की नमी',
    'dash.soilPhLevel': 'मिट्टी pH स्तर',
    'dash.acidityAlkalinity': 'अम्लता/क्षारीयता',
    'dash.soilTemperature': 'मिट्टी का तापमान',
    'dash.currentSoilTemp': 'वर्तमान मिट्टी तापमान',
    'dash.statusOverview': 'स्थिति अवलोकन',
    'dash.good': 'अच्छा',
    'dash.warning': 'चेतावनी',
    'dash.critical': 'गंभीर',
    'dash.environmentalConditions': 'पर्यावरणीय स्थितियाँ',
    'dash.nutrientPerformance': 'पोषक तत्व प्रदर्शन विश्लेषण',
    'dash.downloadCsvReport': 'CSV रिपोर्ट डाउनलोड करें',
    'dash.loadingSoilData': 'मिट्टी डेटा लोड हो रहा है...',

    // Metric labels
    'metric.soilMoisture': 'मिट्टी की नमी',
    'metric.soilPh': 'मिट्टी pH',
    'metric.soilTemperature': 'मिट्टी का तापमान',
    'metric.nitrogen': 'नाइट्रोजन (N)',
    'metric.phosphorus': 'फॉस्फोरस (P)',
    'metric.sulfur': 'सल्फर (S)',
    'metric.zinc': 'जस्ता (Zn)',
    'metric.iron': 'लोहा (Fe)',
    'metric.manganese': 'मैंगनीज (Mn)',
    'metric.copper': 'तांबा (Cu)',
    'metric.potassium': 'पोटैशियम (K)',
    'metric.calcium': 'कैल्शियम (Ca)',
    'metric.magnesium': 'मैग्नीशियम (Mg)',

    // Mini-Dashboard
    'mini.title': 'मिनी-डैशबोर्ड',
    'mini.soilMoisture': 'मिट्टी की नमी',
    'mini.phLevel': 'pH स्तर',
    'mini.temperature': 'तापमान',
    'mini.nutrientLevels': 'पोषक स्तर',
    'mini.latestReading': 'नवीनतम रीडिंग',
    'mini.sensorId': 'सेंसर आईडी',
    'mini.time': 'समय',
    'mini.totalReadings': 'कुल रीडिंग',
    'mini.nitrogen': 'नाइट्रोजन (N)',
    'mini.phosphorus': 'फॉस्फोरस (P)',
    'mini.potassium': 'पोटैशियम (K)',
    'mini.calcium': 'कैल्शियम (Ca)',
    'mini.target': 'लक्ष्य',
    'mini.npkNote': 'N (नाइट्रोजन), P (फॉस्फोरस), K (पोटैशियम)',
    'mini.loadingSoilData': 'मिट्टी डेटा लोड हो रहा है...',

    // Table View / Report
    'report.title': 'तालिका दृश्य',
    'report.downloadPdf': 'PDF के रूप में डाउनलोड करें',
    'report.downloadExcel': 'Excel के रूप में डाउनलोड करें',
    'report.downloadCsv': 'CSV के रूप में डाउनलोड करें',

    // Settings page
    'settings.title': 'सेटिंग्स',
    'settings.userDetails': 'उपयोगकर्ता विवरण',
    'settings.members': 'सदस्य',
    'settings.addMember': 'सदस्य जोड़ें',
    'settings.cropMaster': 'फसल मास्टर',
    'settings.userProfile': 'उपयोगकर्ता प्रोफ़ाइल',
    'settings.farmSettings': 'फार्म सेटिंग्स',
    'settings.deviceSettings': 'उपकरण सेटिंग्स',
    'settings.language': 'भाषा',

    // User Details
    'userDetails.title': 'उपयोगकर्ता विवरण',
    'userDetails.subtitle': 'यहाँ उपयोगकर्ता व्यक्तिगत विवरण अपडेट करें',
    'userDetails.username': 'उपयोगकर्ता नाम',
    'userDetails.email': 'ईमेल',
    'userDetails.role': 'भूमिका',
    'userDetails.companyName': 'कंपनी का नाम',

    // Device Settings
    'device.title': 'उपकरण सेटिंग्स',
    'device.addDevice': 'उपकरण जोड़ें',
    'device.noDevicesFound': 'कोई उपकरण नहीं मिला',
    'device.noDevicesHint': 'निगरानी शुरू करने के लिए अपना पहला उपकरण जोड़ें',
    'device.loading': 'उपकरण लोड हो रहे हैं...',
    'device.addNewDevice': 'नया उपकरण जोड़ें',
    'device.editDevice': 'उपकरण संपादित करें',
    'device.deviceName': 'उपकरण का नाम',
    'device.deviceId': 'उपकरण आईडी',
    'device.deviceMode': 'उपकरण मोड',
    'device.location': 'स्थान (वैकल्पिक)',
    'device.description': 'विवरण (वैकल्पिक)',
    'device.cancel': 'रद्द करें',
    'device.add': 'जोड़ें',
    'device.update': 'अपडेट करें',
    'device.deviceIdLabel': 'उपकरण आईडी',
    'device.locationLabel': 'स्थान',
    'device.surveyDevice': 'सर्वेक्षण उपकरण',
    'device.fitAndForget': 'फिट एंड फॉरगेट उपकरण',
    'device.deleteConfirm': 'क्या आप वाकई इस उपकरण को हटाना चाहते हैं?',

    // Language settings
    'lang.title': 'भाषा और क्षेत्र',
    'lang.subtitle': 'डैशबोर्ड के लिए अपनी पसंदीदा भाषा चुनें',
    'lang.preview': 'पूर्वावलोकन',
    'lang.previewText': 'मिट्टी स्वास्थ्य निगरानी डैशबोर्ड सक्रिय है।',
    'lang.saved': 'भाषा सफलतापूर्वक सहेजी गई!',
  },

  // ─── Marathi ──────────────────────────────────────────────────────────────
  mr: {
    // Sidebar nav
    'nav.miniDashboard': 'मिनी-डॅशबोर्ड',
    'nav.dashboard': 'डॅशबोर्ड',
    'nav.tableView': 'तक्ता दृश्य',
    'nav.report': 'अहवाल',
    'nav.settings': 'सेटिंग्ज',
    'nav.logout': 'लॉग आउट',

    // Top-bar / Home
    'home.machineDown': 'मशीन बंद',
    'home.machineRunning': 'मशीन चालू',
    'home.dateRange': 'तारीख श्रेणी',
    'home.allDates': 'सर्व तारखा',

    // Dashboard page
    'dash.title': 'डॅशबोर्ड',
    'dash.summaryOverview': 'सारांश आढावा',
    'dash.soilHealthScore': 'माती आरोग्य गुण',
    'dash.shiBasis': 'भारित SHI सूत्रावर आधारित',
    'dash.avgNutrientLevel': 'सरासरी पोषक पातळी',
    'dash.allNutrientsCombined': 'सर्व पोषक तत्त्वे एकत्रित',
    'dash.soilMoisture': 'मातीतील ओलावा',
    'dash.currentSoilMoisture': 'सध्याचा मातीचा ओलावा',
    'dash.soilPhLevel': 'माती pH पातळी',
    'dash.acidityAlkalinity': 'आम्लता/क्षारता',
    'dash.soilTemperature': 'मातीचे तापमान',
    'dash.currentSoilTemp': 'सध्याचे माती तापमान',
    'dash.statusOverview': 'स्थिती आढावा',
    'dash.good': 'चांगले',
    'dash.warning': 'सावधान',
    'dash.critical': 'गंभीर',
    'dash.environmentalConditions': 'पर्यावरणीय परिस्थिती',
    'dash.nutrientPerformance': 'पोषक तत्त्व कामगिरी विश्लेषण',
    'dash.downloadCsvReport': 'CSV अहवाल डाउनलोड करा',
    'dash.loadingSoilData': 'माती डेटा लोड होत आहे...',

    // Metric labels
    'metric.soilMoisture': 'मातीतील ओलावा',
    'metric.soilPh': 'माती pH',
    'metric.soilTemperature': 'मातीचे तापमान',
    'metric.nitrogen': 'नायट्रोजन (N)',
    'metric.phosphorus': 'फॉस्फरस (P)',
    'metric.sulfur': 'गंधक (S)',
    'metric.zinc': 'जस्त (Zn)',
    'metric.iron': 'लोह (Fe)',
    'metric.manganese': 'मँगनीज (Mn)',
    'metric.copper': 'तांबे (Cu)',
    'metric.potassium': 'पोटॅशियम (K)',
    'metric.calcium': 'कॅल्शियम (Ca)',
    'metric.magnesium': 'मॅग्नेशियम (Mg)',

    // Mini-Dashboard
    'mini.title': 'मिनी-डॅशबोर्ड',
    'mini.soilMoisture': 'मातीतील ओलावा',
    'mini.phLevel': 'pH पातळी',
    'mini.temperature': 'तापमान',
    'mini.nutrientLevels': 'पोषक पातळी',
    'mini.latestReading': 'नवीनतम वाचन',
    'mini.sensorId': 'सेन्सर आयडी',
    'mini.time': 'वेळ',
    'mini.totalReadings': 'एकूण वाचने',
    'mini.nitrogen': 'नायट्रोजन (N)',
    'mini.phosphorus': 'फॉस्फरस (P)',
    'mini.potassium': 'पोटॅशियम (K)',
    'mini.calcium': 'कॅल्शियम (Ca)',
    'mini.target': 'लक्ष्य',
    'mini.npkNote': 'N (नायट्रोजन), P (फॉस्फरस), K (पोटॅशियम)',
    'mini.loadingSoilData': 'माती डेटा लोड होत आहे...',

    // Table View / Report
    'report.title': 'तक्ता दृश्य',
    'report.downloadPdf': 'PDF म्हणून डाउनलोड करा',
    'report.downloadExcel': 'Excel म्हणून डाउनलोड करा',
    'report.downloadCsv': 'CSV म्हणून डाउनलोड करा',

    // Settings page
    'settings.title': 'सेटिंग्ज',
    'settings.userDetails': 'वापरकर्ता तपशील',
    'settings.members': 'सदस्य',
    'settings.addMember': 'सदस्य जोडा',
    'settings.cropMaster': 'पीक मास्टर',
    'settings.userProfile': 'वापरकर्ता प्रोफाइल',
    'settings.farmSettings': 'शेत सेटिंग्ज',
    'settings.deviceSettings': 'उपकरण सेटिंग्ज',
    'settings.language': 'भाषा',

    // User Details
    'userDetails.title': 'वापरकर्ता तपशील',
    'userDetails.subtitle': 'येथे वापरकर्त्याचे वैयक्तिक तपशील अपडेट करा',
    'userDetails.username': 'वापरकर्तानाव',
    'userDetails.email': 'ईमेल',
    'userDetails.role': 'भूमिका',
    'userDetails.companyName': 'कंपनीचे नाव',

    // Device Settings
    'device.title': 'उपकरण सेटिंग्ज',
    'device.addDevice': 'उपकरण जोडा',
    'device.noDevicesFound': 'कोणतेही उपकरण सापडले नाही',
    'device.noDevicesHint': 'देखरेख सुरू करण्यासाठी आपले पहिले उपकरण जोडा',
    'device.loading': 'उपकरणे लोड होत आहेत...',
    'device.addNewDevice': 'नवीन उपकरण जोडा',
    'device.editDevice': 'उपकरण संपादित करा',
    'device.deviceName': 'उपकरणाचे नाव',
    'device.deviceId': 'उपकरण आयडी',
    'device.deviceMode': 'उपकरण मोड',
    'device.location': 'स्थान (पर्यायी)',
    'device.description': 'वर्णन (पर्यायी)',
    'device.cancel': 'रद्द करा',
    'device.add': 'जोडा',
    'device.update': 'अपडेट करा',
    'device.deviceIdLabel': 'उपकरण आयडी',
    'device.locationLabel': 'स्थान',
    'device.surveyDevice': 'सर्वेक्षण उपकरण',
    'device.fitAndForget': 'फिट अँड फॉरगेट उपकरण',
    'device.deleteConfirm': 'तुम्हाला खरोखर हे उपकरण हटवायचे आहे का?',

    // Language settings
    'lang.title': 'भाषा आणि प्रदेश',
    'lang.subtitle': 'डॅशबोर्डसाठी आपली पसंतीची भाषा निवडा',
    'lang.preview': 'पूर्वावलोकन',
    'lang.previewText': 'माती आरोग्य देखरेख डॅशबोर्ड सक्रिय आहे.',
    'lang.saved': 'भाषा यशस्वीरित्या जतन केली!',
  },
};

export default translations;
