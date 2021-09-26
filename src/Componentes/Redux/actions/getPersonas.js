import axios from 'axios'

export const getPersonas = () => {
    return async (dispatch) => {
        try {
            const post = await axios.get('https://jsonplaceholder.typicode.com/posts')

            dispatch({
                type: '@OBTENER_DATA',
                payload: post.data
            })
        }

        catch(e) {
            throw new Error(e)
        }
    }
}