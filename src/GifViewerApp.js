import { useState } from 'react';

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifViewerApp = () => {
    
    const [categories, setCategories] = useState(['Attack on Titan'])

    return (
        <>
            <h2>GifViewerApp</h2>
            <AddCategory
                setCategories={setCategories} 
            />
            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
}
 
export default GifViewerApp;