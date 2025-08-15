import { NextResponse } from 'next/server';
import { PR } from '../../../types/types';

// Sample data for demonstration purposes
const prs: PR[] = [
  {
    id: 1,
    title: 'Bump @types/node from 20.11.24 to 20.11.25',
    htmlUrl: '',
    head: {
      repo: {
        name: 'dependabot-ui',
      },
    },
  },
  {
    id: 2,
    title: 'Fix security issue',
    htmlUrl: '',
    head: {
      repo: {
        name: 'repo2',
      },
    },
  },
];

export async function GET() {
  return NextResponse.json(prs);
}
