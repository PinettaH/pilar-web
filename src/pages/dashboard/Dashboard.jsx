import React, { useEffect } from 'react';
import {
    Grid,
    Paper,
    Box,
    Button,
    Card,
    CardContent,
    Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Grid container spacing={3}>
            <Grid item sx={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        Dashboard
                        <Button variant='contained'>Hola</Button>
                    </Box>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Tarjeta 1
                            </Typography>
                            <Link to="/todo">
                                <Button variant='contained'>
                                    Navegar a Todo
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Tarjeta 2
                            </Typography>
                            <Link to="/fetch-list">
                                <Button variant='contained'>
                                    Navegar a fetchList
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;