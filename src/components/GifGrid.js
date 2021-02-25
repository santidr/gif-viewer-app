import GifGridItem from "./GifGridItem"

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category)

    return ( 
        <>
            <h3 className="animate__animated animate__fadeInLeft">{ category }</h3>

            { loading && <p>Cargando...</p> }

            <div className="card-grid">
            {
                images.map(img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
            </div>
        </>
     );
}
 
export default GifGrid;