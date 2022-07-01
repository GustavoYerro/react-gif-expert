import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'Groku' ]);
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        //onsole.log(newCategory);
        setCategories([newCategory,...categories]);
        //setCategories(cat => [...categories, 'Cobra Kai']);
    }

    console.log(categories);

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory = { onAddCategory }
            />
            {/* Listado de Gif */}
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }/>
                )) 
            }
            {/* Git item */}
        </>
    )
}