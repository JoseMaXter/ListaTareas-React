import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AddTaskIcon from '@mui/icons-material/AddTask'
import Typography from '@mui/material/Typography'
import { useState, useCallback, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import FormLabel from '@mui/material/FormLabel'
import Lista from './Lista'

const Formulario = () => {

    const { handleSubmit, control, formState: { errors }, reset } = useForm()
    const [tareas, setTareas] = useState([])

    const onSubmit = data => {
        setTareas([...tareas, data])
        reset({nombreTarea: ''})
        reset({descripcion: ''})
    }

    const eliminarItem = useCallback(nombreTarea => {
        console.log(`Eliminando item ${nombreTarea}`)
        const nuevasTareas = tareas.filter(tareaCiclo => tareaCiclo.nombreTarea !== nombreTarea)
        setTareas(nuevasTareas)
    }, [tareas])

    return ( 
        <article className="m-auto w-full md:w-9/12 lg:w-7/12 ">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center text-xl font-bold m-4 bg-blue-600 text-white p-2">Lista de tareas</h2>
                <div className="flex flex-col p-4 ">
                    <FormLabel sx={{display: 'flex', flexDirection: 'column'}} error={errors.nombreTarea?.type === 'required' ? true : false}>
                        <Typography variant="subtitle1" sx={{paddingBottom: '15px'}}>Nombre Tarea</Typography>
                        <Controller
                            name="nombreTarea"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <TextField color={errors.nombreTarea ? 'error' : 'primary'} label="Nombre de la tarea" sx={{marginBottom: '1rem'}} {...field} />}
                        />
                    </FormLabel>
         
                    {errors.nombreTarea?.type === 'required' && <h4 className="p-3 text-lg text-white bg-red-600 rounded mb-4">El campo de nombre es obligatorio</h4>}

                    <FormLabel sx={{display: 'flex', flexDirection: 'column'}} error={errors.descripcion?.type === 'required' ? true : false}>
                        <Typography variant="subtitle1" sx={{padding: '15px 0'}}>Descripcion</Typography>
                        <Controller
                            name="descripcion"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <TextField color={errors.descripcion ? 'error' : 'primary'} label="Descripci??n" {...field} />}
                        />
                    </FormLabel>

                    {errors.descripcion?.type === 'required' && <h4 className="p-3 bg-red-600 text-lg text-white rounded mt-4">El campo descripci??n es obligatorio</h4>}

                    <Button variant="contained" sx={{marginTop: '1rem'}} endIcon={<AddTaskIcon />} type="submit">
                        <Typography variant="subtitle1" >
                            Agregar
                        </Typography>
                    </Button>
                </div>
            </form>

            {tareas.length > 0 && <Lista tareas={tareas} setTareas={setTareas} handleEliminarItem={eliminarItem} />}
            
        </article>
     )
}
 
export default Formulario;