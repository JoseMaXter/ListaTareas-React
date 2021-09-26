import { useSelector, useDispatch } from 'react-redux'
import { getPersonas } from './Redux/actions/getPersonas'
import { sumarReducer } from './Redux/actions/sumarReducer'
import Post from './Post'
import { useState } from 'react'


const Home = () => {

    const dispatch = useDispatch()
    const contador = useSelector(state => state.ventas.valor)
    const allPost = useSelector(state => state.ventas.array)
    const [numero, setNumero] = useState(0)

    const prueba = () => {
        setNumero(() => numero + 1)
        console.log(numero)
    }

    return ( 
        <div>
            <h1 className="text-center text-xl" >Probando los post de Placeholder Json con Redux</h1>
            <h2 className="text-center text-xlg">El contador es igual a {contador} </h2>
            <article className="flex justify-center">
                <input className='p-4 m-2 text-center rounded text-green-600 focus:bg-red-800 focus:text-white' type="button" value="Sumar contador" onClick={() => dispatch(sumarReducer())} />
                <input className='p-4 m-2 text-center rounded text-green-600 focus:bg-red-800 focus:text-white' type="button" value="Obtener post" onClick={() => dispatch(getPersonas()) } />  
                <input type="button" onClick={() => prueba()} value="Prueba" />     
            </article>

            {
                allPost.map(post => {
                    return <Post id={post.id} text={post.body} title={post.title} key={post.id} />
                })
            }
        </div>
     )
}

 
export default Home