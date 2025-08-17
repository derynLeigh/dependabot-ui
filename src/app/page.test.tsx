import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

jest.mock("../components/PRList", () => ({
    __esModule: true,
    PRList: () => <div>Mock PRList</div>,
}));

const mockPRs = [
    {
        id: 1,
        title: 'Update dependency',
        html_url: 'https://github.com/your-org/repo1/pull/1',
        head: {
            repo: {
                name: 'repo1',
            },
        },
    },
];

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockPRs),
        })
    ) as jest.Mock;
});

afterEach(() => {
    jest.restoreAllMocks();
});

describe('Home', () => {
    it("renders the page title", () => {
        render(<Home />);
        expect(screen.getByText('📝 Daily Dependabot PR Summary')).toBeInTheDocument();
    });

    it("renders the PRList component", () => {
        render(<Home />);
        expect(screen.getByText('Mock PRList')).toBeInTheDocument();
    });
});