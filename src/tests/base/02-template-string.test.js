const { getSaludo } = require("../../base/02-template-string");
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.test.js', () => {
    test('Prueba en el metodo getSaludo', () => {
        const nombre = 'Carlos';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('Prueba getSaludo sin argumentos', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Juan');
    })


})