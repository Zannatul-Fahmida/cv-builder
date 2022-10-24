import { BottomNavigation, Typography } from '@mui/material';
import React from 'react';

const CommonFooter = () => {
    return (
        <BottomNavigation style={{backgroundColor: '#6D129D', color: '#ffffff'}}>
            <Typography variant="body2" display="block" style={{padding: '15px 0'}}>Copyright 2022 - Cv.Builder</Typography>
        </BottomNavigation>
    );
};

export default CommonFooter;