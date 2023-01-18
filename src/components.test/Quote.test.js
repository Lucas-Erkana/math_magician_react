import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

afterEach(cleanup);

describe('render welcome component without error', () => {
  test('welcome should render', () => {
    render(<Quote />);
  });
  test('matches snapshot for new Header', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
