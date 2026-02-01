import { render } from '@testing-library/preact';
import { vi, describe, it, expect } from 'vitest';
import App from './App';

vi.mock('../../../services/projects');
vi.mock('../../../services/blogs');

describe('App', () => {
  it('renders About me page properly', async () => {
    const { queryAllByText } = render(<App />);
    const aboutTitleElements = queryAllByText('About me');

    expect(aboutTitleElements).toHaveLength(2);
  });
});
