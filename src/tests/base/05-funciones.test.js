import '@testing-library/jest-dom';

const { getUser, getUsuarioActivo } = require("../../base/05-funciones")

describe('Pruenas en 05-fumnciones', () => {
    test('getUser debe de devolver un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe de devolver un objeto', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Alfonso'
        }

        const user = getUsuarioActivo('Alfonso');

        expect(user).toEqual(userTest);
    })
})
