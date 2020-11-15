import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from '../App';
import { getProjects } from '../../services/projects';

jest.mock('../../services/projects');

getProjects.mockResolvedValue([]);

describe('App', () => {
  it('renders App properly', async() => {
    const { queryAllByText } = render(<App />);
    const projectTitleElements = queryAllByText(/Github Projects/i);

    expect(projectTitleElements).toHaveLength(2);

    projectTitleElements.forEach(async(el) =>
      await waitForElement(() => expect(el).toBeInTheDocument())
    );
  });
});
