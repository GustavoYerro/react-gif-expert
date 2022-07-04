import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => { 

    test('debe cambiar el valor de la caja de texto', () => {  

        render( <AddCategory onNewCategory={ () =>{}}/>);
        //screen.debug();
        const input = screen.getByRole('textbox');
        //console.log(imput);
        fireEvent.input( input, {target: { value: 'Titere'} } );
        expect( input.value ).toBe('Titere');
    })

    test('Debe llamar onNewCategory si el input tiene valor', () => { 
        
        const inputValue = 'Titere';
        //Creamos una funcion Mock
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: { value: inputValue} } );
        fireEvent.submit( form );

        //Como ya se disparo el evento, 
        //espero que el valor del input sea vacio
        expect( input.value ).toBe('');

        //Validamo si la funcion fue llamada
        expect( onNewCategory ).toHaveBeenCalled();

        //Validamos que la funcion solo sea llamada 1 ves
        expect( onNewCategory ).toHaveBeenCalledTimes(1);

        //Validamos con que valor fue llamada
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('No debe llamar el onNewCategory si el input esta vacio', () => { 
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');

        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    })
})