import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { DrawerProvider, useGlobalDrawer } from './DrawerContext.tsx';

export const GlobalDrawer: React.FC = () => {
  const { isOpen, closeDrawer } = useGlobalDrawer();

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={closeDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onClick={closeDrawer}>
        <List>
          <ListItem><ListItemText primary="Home" /></ListItem>
          <ListItem><ListItemText primary="Profile" /></ListItem>
          <ListItem><ListItemText primary="Settings" /></ListItem>
        </List>
      </Box>
    </Drawer>
  );
};


