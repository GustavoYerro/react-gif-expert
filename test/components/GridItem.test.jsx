import { render, screen } from '@testing-library/react';
import { GridItem } from '../../src/components/GridItem';

describe('Pruebas en GridItem', () => { 

    const title = 'titulo';
    const url = 'https://url.com/soyunaurl.jpg';

    test('Debe hacer match con el snapshot', () => { 
    
        const { container } = render( <GridItem title={ title} url={ url } />);
        expect ( container ).toMatchSnapshot();

    });
    
    test('Debe mostrar el titulo', () => { 
         render( <GridItem title={ title} url={ url } />);
         expect( screen.getByText( title )).toBeTruthy();
    })

    test('debe mostrar la imagen con la url y el alt indicado', () => { 
        
        render( <GridItem title={ title} url={ url } />);
        //screen.debug();
        //expect( screen.getByRole('img').src ).toBe( url );
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })
})