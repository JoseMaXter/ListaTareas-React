import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AddTaskIcon from '@mui/icons-material/AddTask'
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Typography from '@mui/material/Typography'
import { List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

const Formulario = () => {

    const [secondary, setSecondary] = useState(true)
    const { handleSubmit, control, formState: { errors }, reset } = useForm()
    const [tareas, setTareas] = useState([])

    const onSubmit = data => {
        setTareas([...tareas, data])
        reset({nombreTarea: ''})
        reset({descripcion: ''})
    }

    const elimiarItem = (nombreTarea) => {
        const nuevasTareas = tareas.filter(tarea => tarea.nombreTarea !== nombreTarea)
        setTareas(nuevasTareas)
    }

    return ( 
        <article className="m-auto w-full md:w-9/12 lg:w-7/12 ">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center text-xl font-bold m-4 bg-blue-600 text-white p-2">Lista de tareas</h2>
                <div className="flex flex-col p-4 ">
                    <Controller
                        name="nombreTarea"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField color={errors.nombreTarea ? 'error' : 'primary'} label="Nombre de la tarea" sx={{marginBottom: '1rem'}} {...field} />}
                    />

                    {errors.nombreTarea?.type === 'required' && <h4 className="p-3 bg-red-700 text-white text-center rounded mb-4">El campo de NOMBRE es obligatorio</h4>}

                    <Controller
                        name="descripcion"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <TextField color={errors.descripcion ? 'error' : 'primary'} label="Descripción" {...field} />}
                    />

                    {errors.descripcion?.type === 'required' && <h4 className="p-3 bg-red-700 text-white text-center rounded mt-4">El campo DESCRIPCION es obligatorio</h4>}

                    <Button variant="contained" sx={{marginTop: '1rem'}} endIcon={<AddTaskIcon />} type="submit">
                        <Typography variant="subtitle1" >
                            Agregar
                        </Typography>
                    </Button>
                </div>
            </form>

            <List>
                {
                    tareas.map((tarea, index) => {
                        return(
                            <ListItem key={index} secondaryAction={
                                <IconButton onClick={() => elimiarItem(tarea.nombreTarea)}>
                                  <HighlightOffIcon color="info"/>
                                </IconButton>
                              }>
                                <ListItemIcon>
                                    <AssignmentRoundedIcon color="info"/>
                                </ListItemIcon>

                                <ListItemText secondary={secondary ? `${tarea.descripcion}` : null}>
                                    {tarea.nombreTarea}
                                </ListItemText>
                            </ListItem>
                        )
                    })
                }
            </List>
        </article>
     )
}
 
export default Formulario;