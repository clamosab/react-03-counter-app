
describe('Pruebas en el archivo demos.test.js', () => {
    test('Deben ser iguales los strings', () => {
        // 1. Inicialización
        const mensaje1 = 'Hola mundo'
        
        // 2. Estímulo
        const mensaje2 = 'Hola mundo'
    
        // 3. Observar el comportamiento
        expect(mensaje1).toBe(mensaje2)
    })
});