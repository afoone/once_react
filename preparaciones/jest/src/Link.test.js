import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

test('Link cambia de clase en el hover', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('2 más 2 son cuatro', () => {
    const a = 2 + 2;
    expect(a).toBe(4)
})
