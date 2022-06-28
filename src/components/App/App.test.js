import React from 'react';
import { render } from '@testing-library/react';
import App from './App.jsx';

jest.mock('../../services/projects');

describe('App', () => {
  it('renders About me page properly', async() => {
    const { queryAllByText } = render(<App />);
    const aboutTitleElements = queryAllByText('About me');

    expect(aboutTitleElements).toHaveLength(3);
  });
});
