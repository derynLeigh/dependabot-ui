import React, { useEffect, useState } from 'react';
import { PRList } from '../components/PRList';
import { PR } from '../types/types';

export default function Home() {
  const [prs, setPRs] = useState<PR[]>([]);
  const [loading, setLoading] = useState(true);

  setLoading(true);
  useEffect(() => {
    fetch('/api/prs')
      .then((response) => response.json())
      .then((data: PR[]) => setPRs(data))
      .catch((error) => console.error('Error fetching PRs:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>
        📝 Daily Dependabot PR Summary
      </h1>
      <PRList prs={prs} />
    </div>
  );
}
