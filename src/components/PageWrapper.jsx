import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';

export const PageWrapper = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        py: '40px',
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
