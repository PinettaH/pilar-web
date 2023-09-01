import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid";
import { Card, CardContent, CardHeader, Grid, Stack, TextField, Button, Checkbox, Typography, Paper } from "@mui/material";
import { addTodo, deleteTodo, setCompletedTodo } from "../../redux/slices/todos/todoSlice";


const Todo = () => {
    const [text, setText] = useState('');

    const todos = useSelector(state => state.todo.todos)
    const contador = useSelector(state => state.todo.contador)
    const cantidadTareas = useSelector(state => state.todo.cantidadTareas)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(contador)
    }, [todos])


    const handleChange = (e) => {
        setText(e.target.value)
    }

    const addTask = async () => {
        dispatch(addTodo({ text: text, id: uuid() }))
    }

    const handleChecked = async (e, id) => {
        console.log(e.target.checked)
        dispatch(setCompletedTodo({ id, completed: e.target.checked }))
        await setText(prev => '')
    }

    const delTask = async (id) => {
        dispatch(deleteTodo({ id }))
    }


    return (

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Card>
                        <CardHeader title="Agregar una tarea" />
                        <CardContent>
                            <Stack sx={{ justifyContent: 'space-around' }} direction='row'>
                                <Grid item md={6}>
                                    <TextField value={text} variant="outlined" onChange={handleChange} />
                                </Grid>
                                <Grid item md={6}>
                                    <Button variant="contained" value='tarea' onClick={() => addTask()}> Agregar</Button>
                                </Grid>
                            </Stack>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader title="Tareas" />
                        <CardContent>
                            {
                                todos.map((todo, index) => (
                                    <Stack key={todo.id} sx={{ justifyContent: 'space-between' }} direction='row'>
                                        <Grid item md={1}>
                                            <Checkbox checked={todo.completed} onChange={e => handleChecked(e, todo.id)} />
                                        </Grid>
                                        <Grid item md={9} sx={{ pt: 1 }}>
                                            <Typography sx={{
                                                fontSize: 18,
                                                fontWeight: 700
                                            }}>{todo.text}</Typography>
                                        </Grid>
                                        <Grid item md={2}>
                                            <Button variant="contained" onClick={() => delTask(todo.id)}> Eliminar</Button>
                                        </Grid>

                                    </Stack>
                                ))
                            }
                        </CardContent>
                    </Card>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default Todo;