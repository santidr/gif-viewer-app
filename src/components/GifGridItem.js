const GifGridItem = ({ title, url }) => {
    return ( 
        <div className="card animate__animated animate__bounceIn">
            <img src={ url } alt={ title } />
            <h5>{ title }</h5>
        </div>
     );
}
 
export default GifGridItem;