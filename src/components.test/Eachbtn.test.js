/* eslint-disable */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Btn from '../components/eachBtn';

afterEach(cleanup);

describe('test for button component', () => {
  test('button should render without error', () => {
    render(<Btn/>);
  });
  test('matches snapshot for new button', () => {
    const tree = renderer.create(<Btn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});