const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Heroes', () => {
    test('Debe de devolver un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })


    test('Debe de devolver undefined si el héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })
    
    test('Debe de devolver un array con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( (heroe) => heroe.owner === owner)

        expect(heroes).toEqual(heroesData);
    })

    test('Debe de devolver un array con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( (heroe) => heroe.owner === owner)

        expect(heroes).toEqual(heroesData);
        expect(heroes.length).toBe(2);
    })
    
})
