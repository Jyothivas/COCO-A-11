import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('App Component', () => {
  it('renders UserForm component', () => {
    const { getByTestId } = render(<App />);
    const userForm = getByTestId('user-form');
    expect(userForm).toBeDefined();
  });
  it('renders UserData component', () => {
    const { getByTestId } = render(<App />);
    const userData = getByTestId('user-data');
    expect(userData).toBeDefined();
  });
});
  

