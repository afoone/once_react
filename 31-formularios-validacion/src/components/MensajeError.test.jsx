import MensajeError from './MensajeError';
import renderer from 'react-test-renderer'
import React from 'react'


test('should not render on null', () => {
    const mensaje = renderer.create(
        <MensajeError></MensajeError>
    ).toJSON();
    expect(mensaje).toBeNull();
})

test('should render the message', () => {
    const mensajeTree = renderer.create(
        <MensajeError mensaje="kkk"></MensajeError>, 
    ).toJSON();
    expect(mensajeTree).not.toBeNull()
    expect(mensajeTree).toMatchSnapshot()

})

