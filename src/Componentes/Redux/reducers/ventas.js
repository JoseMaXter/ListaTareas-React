const stateInicial = {
    valor:  0,
    array: []
}

const SUMAR = '@SUMAR'
const OBTENER_DATA = '@OBTENER_DATA'

export const ventasReducer = (state = stateInicial, action) => {
    switch(action.type){
        case OBTENER_DATA:
            return {...state, array: action.payload}
        case SUMAR:
            return {...state, valor: state.valor + action.payload}
        default:
            return state
    }
}
