import React from 'react'
import renderer from 'react-test-renderer'
import PersonCard from './PersonCard'


const personaDePrueba = {
    name: "Juanita",
    joined: 2015,
    quote: "Soy la mejor",
    friends: 10
}


test('se pintan todos los elementos', () => {
    const card = renderer.create(
        <PersonCard persona={personaDePrueba}></PersonCard>
    ).toJSON()
    console.log("card", card); 
    // Primera comprobación
    expect(card.type).toBe("div");
    // Segunda comprobación
    expect(card).toMatchSnapshot()
})




test('dos más dos son cuatro', () => {
    expect(2+2).toBe(4)
})
