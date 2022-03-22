import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getProjects } from '../../services/projects';
import App from '../App';

jest.mock('../../services/projects');

getProjects.mockResolvedValue([]);

describe('App', () => {
  it('renders App properly', async() => {
    const { queryAllByText } = render(<App />);
    const projectTitleElements = queryAllByText(/Github Projects/i);

    expect(projectTitleElements).toHaveLength(2);

    projectTitleElements.forEach(async(el) =>
      await waitFor(() => expect(el).toBeInTheDocument())
    );
  });
});
