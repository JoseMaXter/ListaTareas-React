import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ventasReducer } from '../reducers/ventas'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    ventas: ventasReducer
})

export const generateStore = () => {
    const store = createStore(rootReducer, composeWithDevTools( applyMiddleware( thunk ) ))
    return store
}