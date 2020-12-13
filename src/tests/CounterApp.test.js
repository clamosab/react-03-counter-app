import {render} from '@testing-library/react'
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruenas en CounterApp', () => {

    let wrapper = shallow(<CounterApp />); 
    
    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })
    
    test('debe de mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor que enviamos', () => {
        const valor = 100;
        const wrapper = shallow(
            <CounterApp
                value={valor}/>
        );

        const valorH2 = wrapper.find('h2').text();

        expect(valorH2).toBe(valor.toString()); 
    });
    
    test('debe de incrementar con el botón +1', () => {
        // const btn1 = wrapper.find('button').at(0);
        // console.log(btn1.html());

        wrapper.find('button').at(0).simulate('click')

        const valor = 11;

        const valorH2 = wrapper.find('h2').text();

        expect(valorH2).toBe(valor.toString()); 

    });

    test('debe de decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click')

        const valor = 9;

        const valorH2 = wrapper.find('h2').text();

        expect(valorH2).toBe(valor.toString()); 

    });
    


    test('debe de resetear el valor', () => {
        const valor = 105
        
        const wrapper = shallow(
            <CounterApp
                value={valor}/>
        );

        // Hacemos click en otros botones
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(2).simulate('click')

        // Hacemos click en el boton de reset
        wrapper.find('button').at(1).simulate('click')

        // Obtenemos el valor que se muestra en el <h2>
        const valorH2 = wrapper.find('h2').text();

        expect(valorH2).toBe(valor.toString()); 

    });
    
})
