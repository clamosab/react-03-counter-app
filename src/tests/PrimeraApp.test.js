import {render} from '@testing-library/react'
import PrimeraApp from '../PrimeraApp';
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruenas en PrimeraApp', () => {
    // test('Debe de mostrar el mensaje "Hola mundo"', () => {
    //     const saludo = "Hola mundo";

    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);

    //     expect(getByText(saludo)).toBeInTheDocument();

    // })
    
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola mundo';
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>);
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo mostrado por props', () => {
        const saludo = 'Hola mundo';
        const textoSubtitulo = 'Soy algo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo = {saludo}
                subtitulo = {textoSubtitulo}/>
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(textoSubtitulo);

        
    });
    
    
    
})
