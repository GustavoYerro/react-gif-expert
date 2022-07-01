import { useState } from "react"

//rafc
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    // const onInputChange = ( event ) => {
    //     console.log( event.target.value );
    //     setinputValue( event.target.value );
    // }

    const onInputChange = ({target}) => {
        //console.log( target.value );
        setinputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        // <form onSubmit={ (event) => onSubmit(event)}>
        <form onSubmit={ onSubmit }>
            <input
            type="text"
            placeholder="Buscar gifs"
            value = { inputValue }
            onChange = { onInputChange }
        />
        </form>

    )
}
