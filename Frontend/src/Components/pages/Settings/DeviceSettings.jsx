import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Box,
  IconButton
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useTranslation } from '../../../hooks/useTranslation';

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const DeviceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
`;

const DeviceCard = styled(Card)`
  height: 100%;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }
`;

const ModeChip = styled(Chip)`
  margin-top: 8px;
  
  &.survey {
    background-color: #4caf50;
    color: white;
  }
  
  &.fit_and_forget {
    background-color: #2196f3;
    color: white;
  }
`;

const StatusIndicator = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
  
  &.online {
    background-color: #4caf50;
  }
  
  &.offline {
    background-color: #f44336;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px;
  color: #666;
`;

function DeviceSettings() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingDevice, setEditingDevice] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    deviceId: '',
    mode: 'survey',
    location: '',
    description: ''
  });

  const userData = useSelector((state) => state.auth.userData);
  const { t } = useTranslation();

  // Fetch devices from backend
  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/devices', {
        withCredentials: true
      });

      if (response.data?.success) {
        setDevices(response.data.data || []);
      } else {
        console.error('Fetch failed:', response.data);
        setDevices([]);
      }
    } catch (error) {
      console.error('Error fetching devices:', error);
      setDevices([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDevice = () => {
    setEditingDevice(null);
    setFormData({
      name: '',
      deviceId: '',
      mode: 'survey',
      location: '',
      description: ''
    });
    setOpenDialog(true);
  };

  const handleEditDevice = (device) => {
    setEditingDevice(device);
    setFormData({
      name: device.name,
      deviceId: device.deviceId,
      mode: device.mode,
      location: device.location || '',
      description: device.description || ''
    });
    setOpenDialog(true);
  };

  const handleSaveDevice = async () => {
    try {
      const payload = {
        ...formData,
        userId: userData._id
      };

      console.log('Saving device:', payload);

      // For now, just close the dialog and show success
      setOpenDialog(false);

      // Mock save - in real implementation, call API
      if (editingDevice) {
        console.log('Would update device:', editingDevice._id);
      } else {
        console.log('Would create new device');
      }

      // Refresh the list
      fetchDevices();

    } catch (error) {
      console.error('Error saving device:', error);
    }
  };

  const getModeLabel = (mode) => {
    return mode === 'survey' ? t('device.surveyDevice') : t('device.fitAndForget');
  };

  const handleDeleteDevice = async (deviceId) => {
    if (window.confirm(t('device.deleteConfirm'))) {
      try {
        console.log('Would delete device:', deviceId);
        // Mock delete - in real implementation, call API
        fetchDevices();
      } catch (error) {
        console.error('Error deleting device:', error);
      }
    }
  };

  const getModeColor = (mode) => {
    return mode === 'survey' ? 'survey' : 'fit_and_forget';
  };

  if (loading) {
    return (
      <Container>
        <Typography variant="h6">{t('device.loading')}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Typography variant="h4">{t('device.title')}</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddDevice}
        >
          {t('device.addDevice')}
        </Button>
      </Header>

      {devices.length === 0 ? (
        <EmptyState>
          <Typography variant="h6" gutterBottom>
            {t('device.noDevicesFound')}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {t('device.noDevicesHint')}
          </Typography>
        </EmptyState>
      ) : (
        <DeviceGrid>
          {devices.map((device) => (
            <DeviceCard key={device._id}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box flex={1}>
                    <Typography variant="h6" gutterBottom>
                      {device.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        {t('device.deviceIdLabel')}: {device.deviceId}
                      </Typography>
                      {device.location && (
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                          {t('device.locationLabel')}: {device.location}
                        </Typography>
                      )}
                    {device.description && (
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        {device.description}
                      </Typography>
                    )}

                    <Box display="flex" alignItems="center" mt={1}>
                      <StatusIndicator className={device.status || 'online'} />
                      <Typography variant="caption">
                        {(device.status || 'online').charAt(0).toUpperCase() + (device.status || 'online').slice(1)}
                      </Typography>
                    </Box>

                    <ModeChip
                      label={getModeLabel(device.mode)}
                      className={getModeColor(device.mode)}
                      size="small"
                    />
                  </Box>

                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => handleEditDevice(device)}
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteDevice(device._id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </DeviceCard>
          ))}
        </DeviceGrid>
      )}

      {/* Add/Edit Device Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingDevice ? t('device.editDevice') : t('device.addNewDevice')}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label={t('device.deviceName')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label={t('device.deviceId')}
              value={formData.deviceId}
              onChange={(e) => setFormData({ ...formData, deviceId: e.target.value })}
              margin="normal"
              required
              disabled={!!editingDevice}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>{t('device.deviceMode')}</InputLabel>
              <Select
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                label={t('device.deviceMode')}
              >
                <MenuItem value="survey">📊 {t('device.surveyDevice')}</MenuItem>
                <MenuItem value="fit_and_forget">🤖 {t('device.fitAndForget')}</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label={t('device.location')}
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              margin="normal"
            />

            <TextField
              fullWidth
              label={t('device.description')}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              margin="normal"
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>{t('device.cancel')}</Button>
          <Button
            onClick={handleSaveDevice}
            variant="contained"
            disabled={!formData.name || !formData.deviceId}
          >
            {editingDevice ? t('device.update') : t('device.add')} {t('device.title').split(' ')[0]}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default DeviceSettings;
