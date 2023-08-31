import React, { useEffect } from 'react';
import {
    Grid,
    Paper,
    Box,
    Button,
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField,

} from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const contador = useSelector(state => state.todo.contador)
    const cantidadTareas = useSelector(state => state.todo.cantidadTareas)

    return (

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        Dashboard
                    </Box>
                </Paper>
                <Paper sx={{ p: 2 }}>
                    <Card>
                        <CardHeader title="Cantidad Tareas:" />
                        <CardContent>
                            <TextField disabled id="outlined-disabled" label={cantidadTareas} variant="outlined" />
                        </CardContent>
                        <CardHeader title="Completadas:" />
                        <CardContent>
                            <TextField disabled id="outlined-disabled" label={contador} variant="outlined" />
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;