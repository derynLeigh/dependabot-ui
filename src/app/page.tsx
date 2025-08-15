'use client';

import React, { useEffect, useState } from 'react';
import { PRList } from '../components/PRList';
import { PR } from '../types/types';

export default function Home() {
  const [prs, setPRs] = useState<PR[]>([]);

  useEffect(() => {
    fetch('/api/prs')
      .then((response) => response.json())
      .then((data: PR[]) => setPRs(data))
      .catch((error) => console.error('Error fetching PRs:', error));
  }, []);

  return (
    <div className='container mx-auto p-2'>
      <h1 className='text-5xl font-bold my-6'>
        📝 Daily Dependabot PR Summary
      </h1>
      <PRList prs={prs} />
    </div>
  );
}
