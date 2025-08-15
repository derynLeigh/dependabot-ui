import React from 'react';
import { PR, PRListProps } from '../types/types';

export const PRList = ({ prs }: PRListProps) => {
  return (
    <ul className='space-y-2'>
      {prs.map((pr: PR) => (
        <li key={pr.id} className='border p-4 rounded-md'>
          <h3 className='text-lg font-semibold'>
            <a href={pr.htmlUrl} target='_blank' rel='noopener noreferrer'>
              {pr.title}
            </a>
          </h3>
          <span className='text-sm text-gray-600'>
            Repository: {pr.head.repo.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
