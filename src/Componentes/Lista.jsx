import { List } from '@mui/material'
import Item from './Item'
import { useState, memo, useCallback } from 'react'

const Lista = memo(({tareas, setTareas, handleEliminarItem}) => {

    console.log('Lista')
    
    const [secondary, setSecondary] = useState(true)

    return(
        <List>
            {
                tareas.map((tarea, index) => {
                    return(
                        <Item key={index} tarea={tarea} secondary={secondary} handleEliminarItem={handleEliminarItem}  />
                    ) 
                })
            }
        </List>
    )
})

export default Lista