const Post = ({title, id, text}) => {
    return ( 
        <div className="bg-gray-500 m-4 text-white p-4">
            <h2 className="text-center text-xl">Titulo : {title}</h2>
            <p className="text-lg">id : {id}</p>
            <p className="text-lg">texto : {text}</p>
        </div>
     );
}
 
export default Post;