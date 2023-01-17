import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
 
afterEach(cleanup);
 
describe('render welcome component without error', () => {
  test('welcome should render', () => {
    render(<Home />);
  });
  test('matches snapshot for new Header', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});