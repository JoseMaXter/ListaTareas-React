import { ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material'
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { memo, useMemo } from 'react'

const Item = memo(({ secondary, tarea, handleEliminarItem }) => {

    console.log(`Render item ${tarea.nombreTarea}`)

    return ( 
        <ListItem secondaryAction={
            <IconButton onClick={() => handleEliminarItem(tarea.nombreTarea)}>
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
 
export default Item

