import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => { 

    test('Debe retornar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs('Simpson');
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0);
        //Evaluo que el objeto tenga la estructura que espero
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    })
})