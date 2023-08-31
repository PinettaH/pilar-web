import React from 'react';
import {
    Grid,
    Paper,
    Box,
    Button
} from '@mui/material';

const FetchList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item sx={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        FetchList
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default FetchList;