import {multiplicarPorDos, divirporDos} from './utils'

test('la funcion multiplicar por dos me multiplica por dos', () => {
    expect(multiplicarPorDos(2)).toBe(4);
    expect(multiplicarPorDos(-2)).toBe(-4)
})

test('la funcion divir por dos me multiplica por dos', () => {
    expect(divirporDos(2)).toBe(1);
    
})


test('nulo debería ser nulo ', () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined()
    expect("hola").not.toBeNull();
})

