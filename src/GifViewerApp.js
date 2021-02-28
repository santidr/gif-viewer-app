import { useState } from 'react';

import HeaderApp from './components/HeaderApp'
import GifGrid from './components/GifGrid'

const GifViewerApp = () => {
    
    const [categories, setCategories] = useState(['Attack on Titan'])

    return (
        <>
            <HeaderApp setCategories={setCategories} />

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