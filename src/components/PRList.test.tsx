import React from 'react';
import { render, screen } from '@testing-library/react';
import { PRList } from './PRList';

const mockPRs = [
  {
    id: 1,
    title: 'Update dependency',
    htmlUrl: 'https://github.com/your-org/repo1/pull/1',
    head: {
      repo: {
        name: 'repo1',
      },
    },
  },
  {
    id: 2,
    title: 'Fix security issue',
    htmlUrl: 'https://github.com/your-org/repo2/pull/2',
    head: {
      repo: {
        name: 'repo2',
      },
    },
  }
]

describe('PRList', () => {
  beforeEach(() => {
    render(<PRList prs={mockPRs} />);
  });

  it('renders the list of PRs', () => {
    expect(screen.getByText('Update dependency')).toBeInTheDocument();
    expect(screen.getByText('Fix security issue')).toBeInTheDocument();
    expect(screen.getByText('Repository: repo1')).toBeInTheDocument();
    expect(screen.getByText('Repository: repo2')).toBeInTheDocument();
  });

  it('renders links to the PRs', () => {
    const link1 = screen.getByRole('link', { name: 'Update dependency' });
    expect(link1).toHaveAttribute('href', 'https://github.com/your-org/repo1/pull/1');

    const link2 = screen.getByRole('link', { name: 'Fix security issue' });
    expect(link2).toHaveAttribute('href', 'https://github.com/your-org/repo2/pull/2');
  });
});