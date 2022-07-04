import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//Hacemos un Mock de toda la funcion
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 
    
    const category = 'Titere';

    test('Debe mostrar el Loading inicial', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'QWE',
                title: 'Pepe',
                url: 'https://localhost/pepe.jpg'
            },
            {
                id: '123',
                title: 'Titere',
                url: 'https://localhost/titere.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        //screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})