import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';

const Widget = ({ title, children }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        animation: 'fade-in 0.5s ease-in-out',
        transition: 'transform 0.3s, box-shadow 0.3s',
        height: '100%',
        minHeight: '150px', // Ensure consistent height
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  );
};

export default Widget;
