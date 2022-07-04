import { useState } from "react";
import PropTypes from "prop-types";

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
        <form onSubmit={ onSubmit } aria-label="form">
            <input
            type="text"
            placeholder="Buscar gifs"
            value = { inputValue }
            onChange = { onInputChange }
        />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
